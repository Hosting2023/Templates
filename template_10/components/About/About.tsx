import { FC } from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import girl from "@/public/girl.svg";

const About: FC = () => {
   return (
      <div className={styles.about} id="about">
         <div className={`${styles.wrapper} wrapper`}>
            <div className={`${styles.about_title} title`}>
               About me
            </div>
            <div className={styles.about_content}>
               <div className={styles.about_text}>
                  <div className={styles.about_text_title}>
                     My name is Karina and I have been working as a maid for 5 years.
                  </div>
                  <div className={styles.about_text_description}>
                     I approach my work with great responsibility and strive to achieve the highest quality in every task. Cleanliness and order are my priorities, and I will gladly turn your home into the perfect place to live. Reliability, professionalism and attention to detail is what you can expect from me.
                     <p>Trust me to take care of your home and I am sure that you will be satisfied with the result. Order now to enjoy the freshness and cleanliness of your home without the hassle.</p >
                  </div>
               </div>
               <div className={styles.about_img}>
                  <Image
                     src={girl}
                     alt="girl"
                     className={styles.img}
                  />
               </div>
            </div >
         </div >
      </div >
   )
}

export default About