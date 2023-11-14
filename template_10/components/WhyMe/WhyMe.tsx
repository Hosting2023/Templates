import { FC, useState } from "react";
import styles from "./WhyMe.module.scss";
import Slider from './../Slider/Slider';
import Image from "next/image";
import arrow_left_gray from "@/public/arrow-left-gray.svg";
import arrow_right_gray from "@/public/arrow-right-gray.svg";
import arrow_left from "@/public/arrow_left.svg";
import arrow_right from "@/public/arrow_right.svg";
import schedule from "@/public/schedule.svg";
import idea from "@/public/idea.svg";

const slidesData = [
   {
      title: 'Flexible working hours',
      img: schedule.src,
      description: "You can order my maid service at the time you need, which allows you to avoid the inconvenience of waiting for room cleaning."
   },
   {
      title: 'Professional approach',
      img: idea.src,
      description: "I know what tools and products to use to get the best results, and what techniques to use for cleaning different types of surfaces."
   },
   {
      title: 'Flexible working hours',
      img: schedule.src,
      description: "You can order my maid service at the time you need, which allows you to avoid the inconvenience of waiting for room cleaning."
   },
   {
      title: 'Professional approach',
      img: idea.src,
      description: "I know what tools and products to use to get the best results, and what techniques to use for cleaning different types of surfaces."
   },

];
const WhyMe: FC = () => {
   const [currentIndex, setCurrentIndex] = useState<number>(0);

   const NextSlide = () => setCurrentIndex((prevIndex: number) => prevIndex + 1);

   const PrevSlide = () => setCurrentIndex((prevIndex: number) => prevIndex - 1);

   return (
      <div className={styles.whyme} >
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.whyme_up} >
               <div className={`${styles.whyme_title} title`} >
                  Why me
               </div>
               <div className={styles.whyme_buttons_slider}>
                  <button className={styles.arrow} >
                     {
                        currentIndex - 1 < 0 ? (<>
                           < Image
                              src={arrow_left_gray}
                              className={styles.img}
                              alt={"arrow_left"}

                           /></>) : (<>
                              < Image
                                 onClick={PrevSlide}
                                 src={arrow_left}
                                 className={styles.img}
                                 alt={"arrow_left"}

                              /></>)}

                  </button>
                  <button className={styles.arrow} >
                     {
                        currentIndex >= slidesData.length - 2 ? (<>
                           <Image
                              src={arrow_right_gray}
                              className={styles.img}
                              alt={"arrow_right"}

                           /></>) : (<>
                              <Image
                                 onClick={NextSlide}
                                 src={arrow_right}
                                 className={styles.img}
                                 alt={"arrow_right"}

                              /></>)
                     }
                  </button>
               </div>
            </div>
            <div className={styles.whyme_down}>
               <Slider
                  currentIndex={currentIndex}
                  slides={slidesData}
                  renderSlide={(slide: any) => (
                     <div className={styles.slide}>
                        <div className={styles.slide_title}>
                           {slide.title}
                        </div>
                        <div className={styles.slide_img}>
                           <Image
                              src={slide.img}
                              className={styles.img}
                              alt={slide.img}
                              width={100}
                              height={100}
                           />
                        </div>
                        <div className={styles.slide_description}>
                           {slide.description}
                        </div>

                     </div>
                  )}
               />
            </div>
         </div>

      </div>
   )
}

export default WhyMe;