import { FC, useState } from "react";
import styles from "./Services.module.scss";
import Image from "next/image";
import arrow_left_gray from "@/public/arrow-left-gray.svg";
import arrow_right_gray from "@/public/arrow-right-gray.svg";
import arrow_left from "@/public/arrow_left.svg";
import arrow_right from "@/public/arrow_right.svg";
import clean_1 from "@/public/clean-1.svg";
import window_clean from "@/public/window-clean.svg";



interface ServicesSlider {
   title: string,
   description: string,
   img: string,
   text: string,
   small_text: string,
}

const servicesSlider: ServicesSlider[] = [
   {
      title: "Regular cleaning",
      description: "Our regular cleaning services will help keep your home in perfect condition on an ongoing basis. Our maid will come regularly and do a thorough cleaning of all areas, including cleaning floors, vacuuming, dusting, cleaning bathrooms and kitchens.",
      img: clean_1.src,
      text: "Usually takes from 1 to 3 hours depending on the size of the room and its condition.",
      small_text: "*Cleaning time may vary depending on various factors.",
   },
   {
      title: "Window cleaning",
      description: "Our window cleaning services will bring shine and brightness to your home. Our maid will carefully clean the windows from dust, dirt and stains, using professional tools and techniques.",
      img: window_clean.src,
      text: "The time taken to clean windows depends on their number and availability. It usually takes about 30 minutes - 1 hour",
      small_text: "*Cleaning time may vary depending on various factors.",
   }
   , {
      title: "After repairing",
      description: "Our post-renovation cleaning services will help you return your home to its original state after construction is completed. We will carry out deep cleaning, remove construction dust, traces of paint and glue, as well as wash floors, walls and windows.",
      img: window_clean.src,
      text: "The time spent cleaning up after a renovation can vary from a few hours to a few days.",
      small_text: "*Cleaning time may vary depending on various factors.",
   }
]
const Services: FC = () => {
   const [activeSlide, setActiveSlide] = useState(0);
   const [direction, setDirection] = useState<'left' | 'right'>('right');

   const NextSlide = () => {
      setActiveSlide(activeSlide + 1);
      setDirection("right")

   }
   const PrevSlide = () => {
      setActiveSlide(activeSlide - 1);
      setDirection('left')
   }

   return (
      <div className={styles.services} id="services">
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.services_up} >
               <div className={`${styles.services_title} title`} >
                  Services
               </div>
               <div className={styles.services_buttons_slider}>
                  <button className={styles.arrow} >
                     {
                        activeSlide < 1 ? (<>
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
                        activeSlide == servicesSlider.length - 1 ? (<>
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
            <div className={styles.services_down}>
               {servicesSlider.map((slider, index) => {
                  return (
                     <Slider
                        key={index}
                        slider={slider}
                        direction={direction}
                        isActive={index === activeSlide}
                     />
                  )
               }
               )}
            </div>
         </div>
      </div >
   )
}

export default Services;


interface SliderProps {
   slider: any;
   direction?: 'left' | 'right';
   isActive: boolean;
}

const Slider: React.FC<SliderProps> = ({ slider, direction, isActive }) => {
   const animationClassName = isActive
      ? direction === 'left'
         ? styles.animateLeft
         : direction === 'right'
            ? styles.animateRight
            : styles.active
      : '';
   return (
      <div className={`${styles.services_slide} ${animationClassName}`}>
         <div className={`${styles.services_item}`}>
            <div className={styles.services_item_text}>
               <div className={styles.services_item_title}>{slider.title}</div>
               <div className={styles.services_item_description}>
                  {slider.description}
               </div>
            </div>
            <div className={styles.services_item_img}>
               <Image
                  src={slider.img}
                  className={styles.img}
                  alt={"clean"}
                  width={250}
                  height={250}
               />
            </div>
            <div className={styles.services_item_small_text}>
               <p className={styles.text}>{slider.text}</p>
               <p className={styles.small}>{slider.small_text}</p>
            </div>
         </div>
      </div>
   );
};
