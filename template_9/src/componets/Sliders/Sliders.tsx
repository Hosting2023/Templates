import React, { useRef, useState, useEffect } from 'react';
import Slide from '../Slide/Slide';
import styles from "./Sliders.module.scss"
type SlideItem = {
   id?: number;
   img: string;
   name: string;
   description: string;
   estimation: number;
};

type SliderProps = {
   slides: SlideItem[];
};

const Slider: React.FC<SliderProps> = ({ slides }) => {
   const sliderRef = useRef<HTMLDivElement>(null);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [slideWidth, setSlideWidth] = useState(0);
   const totalSlides = slides.length;
   const maxVisibleSlides = 3;

   useEffect(() => {
      const handleResize = () => {
         const sliderWidth = sliderRef.current?.getBoundingClientRect().width || 0;
         let newSlideWidth = sliderWidth / maxVisibleSlides;
         setSlideWidth(newSlideWidth);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [maxVisibleSlides]);

   const handleNextSlide = () => {
      if (currentIndex + 1 <= totalSlides - maxVisibleSlides) {
         setCurrentIndex((prevIndex) => prevIndex + 1);
      }
   };

   const handlePrevSlide = () => {
      if (currentIndex > 0) {
         setCurrentIndex((prevIndex) => prevIndex - 1);
      }
   };
   return (
      <div className={styles.sliders}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles['slider-container']}>
               {currentIndex > 0 && (
                  <div className={`${styles['slider-button']} ${styles['slider-button-prev']}`} onClick={handlePrevSlide}>
                     <img src="/arrow.svg" alt="" />
                  </div>
               )}
               <div className={styles.slider} ref={sliderRef}>
                  <div
                     className={styles.slides}
                     style={{
                        transform: `translateX(-${currentIndex * slideWidth}px)`,
                        transition: 'transform 0.4s ease-in-out',
                        width: `${totalSlides * slideWidth}px`,
                     }}
                  >
                     {slides.map((slide: SlideItem) => (
                        <div key={slide.id} style={{ width: `${slideWidth}px` }}>
                           <Slide name={slide.name} estimation={slide.estimation} description={slide.description} img={slide.img} />
                        </div>
                     ))}
                  </div>
               </div>
               {currentIndex + maxVisibleSlides < totalSlides - 2 && (
                  <div className={`${styles['slider-button']} ${styles['slider-button-next']}`} onClick={handleNextSlide}>
                     <img src="/arrow.svg" alt="" />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Slider;