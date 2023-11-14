import React, { useState } from 'react';
import styles from './Slider.module.scss';

interface Slide {
   img: string;
   name: string;
   star: number;
   description: string;
}

interface SliderProps {
   slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
   const [skided, setSkided] = useState([0, 1, 2, 3, 4]);

   const handleSlideClick = (index: number) => {
      if (index !== skided[2]) {
         const tempSkided = [...skided];
         const clickedSlideIndex = tempSkided.indexOf(index);
         const temp = tempSkided[2];
         tempSkided[2] = tempSkided[clickedSlideIndex];
         tempSkided[clickedSlideIndex] = temp;
         setSkided(tempSkided);
      }
   };

   return (
      <div className={styles['slider-container']}>
         <div className={styles.slider}>
            {skided.map((skidedIndex, displayIndex) => {
               const slide = slides[skidedIndex];
               return (
                  <div
                     key={displayIndex}
                     className={`${styles.slide} ${displayIndex === 2 ? styles.active : ''}`}
                     onClick={() => handleSlideClick(skidedIndex)}
                  >
                     <img src={slide.img} alt={slide.name} />
                  </div>
               );
            })}
         </div>
         <div className={styles['slide-details']}>
            <div className={styles['active-slide']}>
               <h2>{slides[skided[2]].name}</h2>
            </div>
            <div className={styles.stars}>
               {Array.from({ length: slides[skided[2]].star }, (_, index) => (
                  <span key={index} className={styles.star}>
                     &#9733;
                  </span>
               ))}
            </div>
            <p>{slides[skided[2]].description}</p>
         </div>
      </div>
   );
};

export default Slider;
