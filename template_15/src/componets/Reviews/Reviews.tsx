import { FC } from "react";
import styles from "./Reviews.module.scss";
import Image from "next/image";
import people_1 from "@/public/people_1.svg";
import people_2 from "@/public/people_2.svg";
import people_3 from "@/public/people_3.svg";
import people_4 from "@/public/people_4.svg";
import people_5 from "@/public/people_5.svg";
import Slider from './../Slider/Slider';

interface Slide {
   img: string;
   name: string;
   star: number;
   description: string;
}
const sliders: Slide[] = [{
   img: people_1.src,
   name: "John Doe1",
   star: 5,
   description: "I am very satisfied with the maid service! She showed great professionalism and attention to detail. My home has become a place of true comfort and cleanliness thanks to her efforts. Not only did she meticulously clean all the rooms, but she also created a cozy atmosphere that my guests and I now enjoy. I recommend her services to anyone who appreciates quality and reliability! "
},
{
   img: people_2.src,
   name: "John Doe2",
   star: 5,
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc ut dignissim cursus. Sed euismod, diam quis aliquam tincidunt, nibh diam luctus libero, vitae lacinia nisl libero sit amet urna. "
},
{
   img: people_3.src,
   name: "John Doe3",
   star: 2,
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc ut dignissim cursus. Sed euismod, diam quis aliquam tincidunt, nibh diam luctus libero, vitae lacinia nisl libero sit amet urna. "
},
{
   img: people_4.src,
   name: "John Doe4",
   star: 5,
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc ut dignissim cursus. Sed euismod, diam quis aliquam tincidunt, nibh diam luctus libero, vitae lacinia nisl libero sit amet urna. "
},
{
   img: people_5.src,
   name: "John Doe6",
   star: 5,
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc ut dignissim cursus. Sed euismod, diam quis aliquam tincidunt, nibh diam luctus libero, vitae lacinia nisl libero sit amet urna. "
}]
const Reviews: FC = () => {
   return (
      <div className={styles.reviews}>
         <div className={styles.block_down}>
            <div className={`${styles.squire} ${styles.top_left}`}></div>
            <div className={`${styles.squire} ${styles.top_right}`}></div>
            <div className={`${styles.squire} ${styles.bottom_left}`}></div>
            <div className={`${styles.squire} ${styles.bottom_right}`}></div>
         </div>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.reviews_content}>
               <div className={styles.reviews_content_text}>
                  <div className={styles.text}>

                     <div className={`${styles.text_title} title`}>
                        Reviews
                     </div>
                     <div className={styles.text_description}>
                        The joy of cleanliness: satisfied clients about my work
                     </div>
                  </div>
               </div>
               <div className={styles.reviews_content_slider}>
                  <Slider slides={sliders} />
               </div>
            </div>
         </div>
      </div>

   )
}


export default Reviews;