import React, { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.scss';
import Image from 'next/image';

interface SliderProps {
   slides: any[];
   renderSlide: (slide: any) => React.ReactNode;
   isChangeVisibleSlide?: boolean;
}

const Slider: React.FC<SliderProps> = ({
   slides,
   renderSlide,
   isChangeVisibleSlide = true,
}) => {
   const sliderRef = useRef<HTMLDivElement>(null);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [slideWidth, setSlideWidth] = useState(0);
   const [maxVisibleSlides, setMaxVisibleSlides] = useState(3);
   const totalSlides = slides.length;
   const [isDragging, setIsDragging] = useState(false);
   const [dragStartX, setDragStartX] = useState(0);
   const [currentX, setCurrentX] = useState(0);

   useEffect(() => {
      const handleResize = () => {
         const sliderWidth = sliderRef.current?.getBoundingClientRect().width || 0;
         let newMaxVisibleSlides = sliderWidth < 700 ? 2 : 3;
         setMaxVisibleSlides(newMaxVisibleSlides);
         let newSlideWidth = sliderWidth / newMaxVisibleSlides;
         setSlideWidth(newSlideWidth);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [isChangeVisibleSlide]);

   useEffect(() => {
      const newCurrentIndex = Math.min(currentIndex, totalSlides - maxVisibleSlides);
      setCurrentIndex(newCurrentIndex);
   }, [currentIndex, maxVisibleSlides, totalSlides]);

   const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      setIsDragging(true);
      if (e.type === 'touchstart' || e.type === 'mousedown') {
         const clientX = e.type === 'touchstart'
            ? (e as React.TouchEvent).touches[0].clientX
            : (e as React.MouseEvent).clientX;
         setDragStartX(clientX - currentX);
      }
   };

   const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const clientX = e.type === 'touchmove'
         ? (e as React.TouchEvent).touches[0].clientX
         : (e as React.MouseEvent).clientX;
      setCurrentX(clientX - dragStartX);
   };

   const handleDragEnd = () => {
      if (!isDragging) return;
      setIsDragging(false);
      const diff = dragStartX - currentX;
      const dragThreshold = slideWidth * 0.3;
      const absoluteDiff = Math.abs(diff);

      if (absoluteDiff > dragThreshold) {
         const newIndex = diff > 0
            ? Math.min(currentIndex + 1, totalSlides - maxVisibleSlides)
            : Math.max(currentIndex - 1, 0);
         setCurrentIndex(newIndex);
      }

      setDragStartX(0);
      setCurrentX(0);
   };

   return (
      <div className={styles.sliderContainer}>
         <div
            className={styles.slider}
            ref={sliderRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onTouchCancel={handleDragEnd}
         >
            <div
               className={styles.slides}
               style={{
                  transform: `translateX(-${currentIndex * slideWidth - currentX}px)`,
                  transition: isDragging ? 'none' : 'transform 0.4s ease-in-out',
                  width: `${totalSlides * slideWidth}px`,
               }}
            >
               {slides.map((slide, index) => (
                  <div
                     key={index}
                     style={{ width: `${slideWidth}px` }}
                  >
                     {renderSlide(slide)}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Slider;
