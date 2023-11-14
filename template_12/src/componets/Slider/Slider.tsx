import React, { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.scss';
import Image from 'next/image';
import arrow from "@/public/arrow.svg";
import arrow_gray from "@/public/arrow.svg";

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
   const [maxVisibleSlides, setMaxVisibleSlides] = useState(1);
   const totalSlides = slides.length;

   useEffect(() => {
      const handleResize = () => {
         const sliderWidth = sliderRef.current?.getBoundingClientRect().width || 0;
         let newSlideWidth = sliderWidth / maxVisibleSlides;
         setSlideWidth(newSlideWidth);

         if (typeof window !== 'undefined') {
            const newMaxVisibleSlides = isChangeVisibleSlide && window?.innerWidth < 1000 ? 1 : 1;
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

   const handlePrevClick = () => {
      if (currentIndex > 0) {
         setCurrentIndex(currentIndex - 1);
      }
   };

   const handleNextClick = () => {
      if (currentIndex < totalSlides - maxVisibleSlides) {
         setCurrentIndex(currentIndex + 1);
      }
   };

   return (
      <div className={styles.sliderContainer}>
         {currentIndex > 0 ? (
            <button className={`${styles.slideButton} ${styles.left}`} onClick={handlePrevClick}>
               <Image src={arrow} alt="Previous" />
            </button>
         ) : <button className={`${styles.slideButton} ${styles.left}`} >
            <Image src={arrow_gray} alt="Previous" />
         </button>}
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
         {currentIndex < totalSlides - maxVisibleSlides ? (
            <button className={styles.slideButton} onClick={handleNextClick}>
               <Image src={arrow} alt="Next" />
            </button>
         ) : <button className={styles.slideButton} >
            <Image src={arrow_gray} alt="Next" />
         </button>}
      </div>
   );
};

export default Slider;