import { FC } from "react";
import styles from "./Main.module.scss";
import Image from 'next/image';
import main from "@/public/main.svg";
import slide_1 from "@/public/slide-1.svg";
import slide_4 from "@/public/slide-6.svg";
import { contentBlocks, ContentBlock } from "@/assets/main";

const sliders: string[] = [slide_1, slide_4, slide_1];




const Main: FC = () => {
   return (<div className={styles.main}>
      <Image
         src={main}
         alt={main}
         className={styles.main_img}
      />
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.main_content}>
            <div className={styles.main_content_up}>
               <div className={`${styles.main_content_left} title`}>
                  Immaculate cleanliness and order - maid services for your comfort!
               </div>
               <div className={styles.main_content_right}>
                  <p>
                     I am a housekeeper, and I don't just do the job - I do it with love and respect for you and your space. I want you to feel as comfortable and cozy as possible.
                  </p>
                  <p>
                     I will not only ensure perfect cleanliness and order in your room but also pay attention to every detail to make your stay here truly enjoyable. I know that every client is unique, and I am always ready to adapt to your individual needs and wishes. My job is not just cleaning, it is taking care of your comfort and well-being.
                  </p>
                  <p>Trust me, and I promise you won't regret choosing my services.</p>
               </div>
            </div>
            <div className={styles.main_content_down} id="benefits">
               {
                  contentBlocks.map((block: ContentBlock) => {
                     const { imgSrc, altText, title, description } = block;
                     return (
                        <div className={styles.main_content_block}>
                           <div className={styles.block_img}>
                              <Image
                                 src={imgSrc}
                                 alt={altText}
                              />
                           </div>
                           <div className={styles.block_title}>
                              {title}
                           </div>
                           <div className={styles.block_description}>
                              {description}
                           </div>
                        </div>
                     )
                  }
                  )}
            </div>
         </div>
      </div>
      <div className={styles.main_content_sliders}>
         <div className={styles.main_sliders}>
            {
               sliders.map((slide: string) => {
                  return (
                     <div className={styles.slide}>
                        <Image
                           src={slide}
                           alt="slide"
                        />
                     </div>
                  )
               })
            }
         </div>
         <div className={styles.main_sliders}>
            {
               sliders.map((slide: string) => {
                  return (
                     <div className={styles.slide}>
                        <Image
                           src={slide}
                           alt="slide"
                        />
                     </div>
                  )
               })
            }
         </div>
      </div>
   </div>
   )
}


export default Main;