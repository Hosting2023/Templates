import { FC } from "react";
import styles from "./Reviews.module.scss";
import Slider from "../Slider/Slider";
import Image from "next/image";
import people_1 from '@/public/people-1.svg'
import people_2 from '@/public/people-2.svg'
const sliders = [{
   id_slide: 1,
   sliders: [
      {
         id: 1,
         img: people_1,
         name: "Elizabeth Brown",
         date: "23.05.23",
         description:
            "I am very satisfied with the work of the maid! Every time she comes, my house becomes perfectly clean. She is very attentive to details and always leaves all places sparkling. I can't imagine my life without her professional services!",
      },
      {
         id: 2,
         img: people_2,
         name: "Helen Hicks",
         date: "23.05.23",
         description:
            "The maid is just amazing! She does her job with such care and enthusiasm. My house has never been so clean and tidy. I always feel like a real  guest in my own home. It has definitely become an integral part of my life.",
      },
   ],
},
{
   id_slide: 1,
   sliders: [
      {
         id: 1,
         img: people_1,
         name: "Elizabeth Brown",
         date: "23.05.23",
         description:
            "I am very satisfied with the work of the maid! Every time she comes, my house becomes perfectly clean. She is very attentive to details and always leaves all places sparkling. I can't imagine my life without her professional services!",
      },
      {
         id: 2,
         img: people_2,
         name: "Helen Hicks",
         date: "23.05.23",
         description:
            "The maid is just amazing! She does her job with such care and enthusiasm. My house has never been so clean and tidy. I always feel like a real  guest in my own home. It has definitely become an integral part of my life.",
      },
   ],
}, {
   id_slide: 1,
   sliders: [
      {
         id: 1,
         img: people_1,
         name: "Elizabeth Brown",
         date: "23.05.23",
         description:
            "I am very satisfied with the work of the maid! Every time she comes, my house becomes perfectly clean. She is very attentive to details and always leaves all places sparkling. I can't imagine my life without her professional services!",
      },
      {
         id: 2,
         img: people_2,
         name: "Helen Hicks",
         date: "23.05.23",
         description:
            "The maid is just amazing! She does her job with such care and enthusiasm. My house has never been so clean and tidy. I always feel like a real  guest in my own home. It has definitely become an integral part of my life.",
      },
   ],
}
   , {
   id_slide: 1,
   sliders: [
      {
         id: 1,
         img: people_1,
         name: "Elizabeth Brown",
         date: "23.05.23",
         description:
            "I am very satisfied with the work of the maid! Every time she comes, my house becomes perfectly clean. She is very attentive to details and always leaves all places sparkling. I can't imagine my life without her professional services!",
      },
      {
         id: 2,
         img: people_2,
         name: "Helen Hicks",
         date: "23.05.23",
         description:
            "The maid is just amazing! She does her job with such care and enthusiasm. My house has never been so clean and tidy. I always feel like a real  guest in my own home. It has definitely become an integral part of my life.",
      },
   ],
}];
const Reviews: FC = () => {
   return (<div className={styles.reviews}>
      <div className={`${styles.wrapper} wrapper`}>
         <div className={`${styles.reviews_title} title`}>
            reviews
         </div>
         <div className={styles.reviews_content}>
            <Slider
               slides={sliders}
               renderSlide={(slide: any) => (
                  <div key={slide.id_slide} className={styles.slide_content}>
                     {
                        slide.sliders.map((item: any) => (
                           <div className={styles.slide} key={item.id}>
                              <div className={styles.img}>
                                 <Image src={item.img.src}
                                    alt={item.img.src}
                                    width={100}
                                    height={130}
                                    className={styles.slider_image}
                                 />

                              </div>
                              <div className={styles.text}>
                                 <div className={styles.text_up}>
                                    <div className={styles.name}>
                                       {item.name}
                                    </div>
                                    <div className={styles.date}>
                                       {item.date}
                                    </div>
                                 </div>
                                 <div className={styles.text_down}>
                                    {item.description}
                                 </div>
                              </div>
                           </div>
                        )
                        )
                     }
                  </div>
               )
               }
            />
         </div>
      </div>
   </div>

   )
}


export default Reviews;