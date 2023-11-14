import React, { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.scss';

interface SliderProps {
   slides: any[];
   renderSlide: (slide: any) => React.ReactNode;
   currentIndex: number;
   isChangeVisibleSlide?: boolean;
}

const Slider: React.FC<SliderProps> = ({
   slides,
   renderSlide,
   currentIndex,
   isChangeVisibleSlide = true,
}) => {
   const sliderRef = useRef<HTMLDivElement>(null);

   const [slideWidth, setSlideWidth] = useState(0);
   const [maxVisibleSlides, setMaxVisibleSlides] = useState(2);
   const totalSlides = slides.length;

   useEffect(() => {
      const handleResize = () => {
         const sliderWidth = sliderRef.current?.getBoundingClientRect().width || 0;
         let newSlideWidth = sliderWidth / maxVisibleSlides;
         setSlideWidth(newSlideWidth);

         if (typeof window !== 'undefined') {
            const newMaxVisibleSlides = isChangeVisibleSlide && window?.innerWidth < 540 ? 1 : 2;
            if (maxVisibleSlides !== newMaxVisibleSlides) {
               setMaxVisibleSlides(newMaxVisibleSlides);
            }
         }
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [maxVisibleSlides, isChangeVisibleSlide]);

   return (
      <div className={styles.slider} ref={sliderRef}>
         <div
            className={styles.slides}
            style={{
               transform: `translateX(-${currentIndex * slideWidth}px)`,
               transition: 'transform 0.4s ease-in-out',
               width: `${totalSlides * slideWidth}px`,
            }}
         >
            {slides.map((slide, index) => (
               <div key={index} style={{ width: `${slideWidth}px` }}>
                  {renderSlide(slide)}
               </div>
            ))}
         </div>
      </div>
   );
};

export default Slider;
