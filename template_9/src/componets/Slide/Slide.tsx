import React from 'react';
import styles from './Slider.module.scss';
type SlideProps = {
   id?: number;
   img: string;
   name: string;
   estimation: number;
   description: string;
};

const Slide: React.FC<SlideProps> = ({
   img,
   name,
   estimation,
   description,
   id
}) => {
   return (
      <div className={`${styles.slide} slide`}>
         <div className={styles.slide_main}>
            <div className={styles.img}>
               <img src={img} alt={`Slide ${name}`} />
            </div>
            <div className={styles.text_star}>
               <div className={styles.name}>
                  {name}
               </div>
               <div className={styles.img_star}>
                  <img src="/star-2.svg" alt="Star Rating" />
                  <p className={styles.estimation}>{estimation}</p>
               </div>
            </div>
         </div>
         <div className={styles.description}>{description}</div>
      </div>
   );
};

export default Slide;
