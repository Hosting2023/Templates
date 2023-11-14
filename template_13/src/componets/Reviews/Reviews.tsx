import { FC } from "react";
import styles from "./Reviews.module.scss";
import Image from "next/image";
import Slider from "@/componets/Slider/Slider";
import people_1 from "@/public/people-1.svg";
import people_2 from "@/public/people-2.svg";
import people_3 from "@/public/people-3.svg";
import user from "@/public/user.svg";

const sliders = [
   {
      img: people_1,
      name: "Fred Walker",
      description: "I was very impressed with the maid's work. She was very professional and cleaned the room impeccably every day. She was also very friendly and smiled every time we saw her. I would definitely recommend her services to other people."

   },
   {
      img: people_2,
      name: "Emma Gilbert",
      description: "The maid was very attentive to detail. She was also very friendly and willing to help with any questions. I was satisfied with everything."

   },
   {
      img: people_3,
      name: "David Ellington",
      description: "She maid at this hotel was a true professional. She was always very polite and willing to help with any questions. The room was always clean and tidy, and cleaning was done every day. I was very satisfied with her work and will recommend her services to my friends."

   }, {
      img: people_1,
      name: "Fred Walker",
      description: "I was very impressed with the maid's work. She was very professional and cleaned the room impeccably every day. She was also very friendly and smiled every time we saw her. I would definitely recommend her services to other people."

   },
   {
      img: people_2,
      name: "Emma Gilbert",
      description: "The maid was very attentive to detail. She was also very friendly and willing to help with any questions. I was satisfied with everything."

   },
   {
      img: people_3,
      name: "David Ellington",
      description: "She maid at this hotel was a true professional. She was always very polite and willing to help with any questions. The room was always clean and tidy, and cleaning was done every day. I was very satisfied with her work and will recommend her services to my friends."

   }

]
const Reviews: FC = () => {
   return (
      <div className={styles.reviews} id="portfolio">
         <div className={styles.reviews_content}>
            <Slider slides={sliders}
               renderSlide={(slide: any) => {
                  return (
                     <div className={styles.slide}>
                        <div className={styles.slide_up}>
                           <div className={styles.slide_img}>
                              <Image
                                 src={slide.img}
                                 alt={slide.img}
                              />
                           </div>
                           <div className={styles.slide_info}>
                              <div className={styles.slide_name}>
                                 Fred Walker
                              </div>
                              <div className={styles.slide_visit}>
                                 <Image
                                    src={user}
                                    alt={user}
                                    className={styles.user}
                                 />
                                 <p>used the service <span>4 times</span></p>
                              </div>
                           </div>
                        </div>
                        <div className={styles.slide_down}>
                           {slide.description}
                        </div>
                     </div>
                  )
               }
               } />
         </div>
      </div>
   )
}


export default Reviews;