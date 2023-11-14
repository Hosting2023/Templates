import { FC } from "react";
import styles from "./Reviews.module.scss";
import Image from "next/image";
import Slider from "../Slider/Slider";
import people_1 from "@/public/people_1.svg";
import people_2 from "@/public/people_2.svg";
import { IReview, sliders } from "@/assets/main";



const Reviews: FC = () => {
   const renderSlide = (slide: IReview) => (
      <div className={styles.slide}>
         <div className={styles.slide_img}>
            <Image
               src={slide.img}
               alt={slide.name}
               layout="responsive"
            />
         </div>
         <div className={styles.slide_text}>
            {slide.text}
         </div>
         <div className={styles.slide_name}>
            {slide.name}
         </div>
      </div>
   );

   return (
      <div className={styles.reviews}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.reviews_content}>
               <div className={styles.reviews_content_up}>
                  <div className={styles.reviews_title_block}>
                     <div className={styles.reviews_block_square}></div>
                     <div className={`${styles.reviews_title} title`}>
                        Reviews
                     </div>
                  </div>
               </div>
               <div className={styles.reviews_content_down}>
                  <Slider slides={sliders} renderSlide={renderSlide} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Reviews;

