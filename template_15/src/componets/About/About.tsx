import { FC, useState } from "react";
import styles from "./About.module.scss";
import Image from 'next/image';
import girl from "@/public/girl.svg";


const About: FC = () => {
   return (<div className={styles.about} id="about">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.about_content}>
            <div className={styles.about_content_text}>
               <div className={`${styles.block_text_title} title`}>
                  about me
               </div>
               <div className={styles.text_description}>
                  <div className={`${styles.block} ${styles.first}`}></div>
                  <div className={`${styles.block} ${styles.two}`}></div>
                  <p>The maid offers a full range of cleaning services, including dusting, vacuuming, mopping, cleaning bathrooms, changing bed linen and ensuring general cleanliness. It ensures the precision of every surface to create fresh and pleasant products in the room.</p>
                  <p>I strive for perfect cleanliness and detail in every corner of the room. My professional qualifications allow me to use efficient cleaning methods and quality products to achieve flawless results.</p>
                  <p>If you are looking for a maid who will provide you with impeccable cleanliness, professional approach and genuine attention to your needs, then I am ready to be the one to create the perfect space for you.</p></div>

            </div>
            <div className={styles.about_content_img}>
               <div className={styles.about_content_img_wrapper}>
                  <Image
                     src={girl}
                     alt="Picture of the author"
                     layout="responsive"
                  />
               </div>
               <div className={`${styles.block} ${styles.first}`}></div>
               <div className={`${styles.block} ${styles.two}`}></div>
            </div>
         </div>
      </div>
   </div>
   )
}

export default About;