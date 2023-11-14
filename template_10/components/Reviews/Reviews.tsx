import { FC, useState } from "react";
import styles from "./Reviews.module.scss";
import Slider from './../Slider/Slider';
import Image from "next/image";
import people_1 from "@/public/people-1.svg";
import people_2 from "@/public/people-2.svg";
import arrow_left_gray from "@/public/arrow-left-gray.svg";
import arrow_right_gray from "@/public/arrow-right-gray.svg";
import arrow_left from "@/public/arrow_left.svg";
import arrow_right from "@/public/arrow_right.svg";


const slidesData = [
   {
      name: 'Rafael Romero',
      img: people_1.src,
      description: "My house is always perfectly clean and tidy after cleaning it. She pays close attention to every detail and creates a cozy atmosphere. I am very pleased with the professionalism and thoroughness of the work. I recommend her services to anyone who wants to have a spotlessly clean home!",
      quote: "She pays close attention to every detail and creates a cozy atmosphere."
   },
   {
      name: 'Regina Armstrong',
      img: people_2.src,
      description: "Cleaning up after the move was a real life saver thanks to the maid. She handled the dirt and clutter left by the move and turned the new location into a residential paradise. Her professionalism and attention to detail impressed me. Thanks a lot for the great work!",
      quote: "Her professionalism and attention to detail impressed me. "
   }, {
      name: 'Rafael Romero',
      img: people_1.src,
      description: "My house is always perfectly clean and tidy after cleaning it. She pays close attention to every detail and creates a cozy atmosphere. I am very pleased with the professionalism and thoroughness of the work. I recommend her services to anyone who wants to have a spotlessly clean home!",
      quote: "She pays close attention to every detail and creates a cozy atmosphere."
   },
   {
      name: 'Regina Armstrong',
      img: people_2.src,
      description: "Cleaning up after the move was a real life saver thanks to the maid. She handled the dirt and clutter left by the move and turned the new location into a residential paradise. Her professionalism and attention to detail impressed me. Thanks a lot for the great work!",
      quote: "Her professionalism and attention to detail impressed me. "
   },
]

const Reviews: FC = () => {
   const [currentIndex, setCurrentIndex] = useState<number>(0);

   const NextSlide = () => setCurrentIndex((prevIndex: number) => prevIndex + 1);

   const PrevSlide = () => setCurrentIndex((prevIndex: number) => prevIndex - 1);


   return (
      <div className={styles.reviews} >
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.reviews_up} >
               <div className={`${styles.reviews_title} title`} >
                  Reviews
               </div>
               <div className={styles.reviews_buttons_slider}>
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
            <div className={styles.reviews_down}>
               <Slider
                  currentIndex={currentIndex}
                  slides={slidesData}
                  renderSlide={(slide: any) => (
                     <div className={styles.slide}>
                        <div className={styles.slide_right}>
                           <div className={styles.slide_image_name}>
                              <div className={styles.slide_img}>
                                 <img
                                    src={slide.img}
                                    className={styles.img}
                                    alt={slide.img}

                                 />
                              </div>
                              <div className={styles.slide_name}>
                                 {slide.name}
                              </div>
                           </div>
                           <div className={styles.slide_quote}>
                              ❝{slide.quote}❞
                           </div>
                        </div>

                        <div className={styles.slide_left}>
                           <div className={styles.slide_description}>
                              {slide.description}
                           </div>
                        </div>
                     </div>
                  )}
               />
            </div>
         </div>

      </div>
   )
}

export default Reviews;