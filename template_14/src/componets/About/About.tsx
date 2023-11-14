import { FC, useState } from "react";
import styles from "./About.module.scss";
import Image from 'next/image';
import smile from '@/public/about.svg';

const About: FC = () => {
   return (<div className={styles.about} id="about">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.about_content}>
            <div className={styles.about_content_img}>
               <Image
                  src={smile}
                  alt="smile"
                  layout="responsive"
               />
            </div>
            <div className={`${styles.about_title} title`}>
               About <span>Me</span>
            </div>
            <div className={styles.about_text}>
               My main responsibility is to ensure that the rooms or apartments are clean and cozy. This means that my duties include cleaning of rooms, wiping surfaces and windows, and stocking all necessary items. I interact with customers politely and friendly, always ready to assist with any questions. In addition, I check the functionality of all equipment.
            </div>
         </div>
      </div>
   </div>
   )
}

export default About;