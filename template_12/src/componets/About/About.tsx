import { FC, useState } from "react";
import styles from "./About.module.scss";
import Image from 'next/image';
import girl from '@/public/girl.svg'
import square from '@/public/main-square.svg'
import things from '@/public/things.svg'
const About: FC = () => {
   return (<div className={styles.about} id="about">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.about_content}>
            <div className={styles.about_content_img}>
               <Image
                  src={square}
                  alt="square"
                  className={styles.square}
               />
               <Image
                  src={things}
                  alt="things"
                  className={styles.things}
               />

               <div className={styles.circle} > <Image
                  src={girl}
                  alt="girl"

                  className={styles.girl}
               /></div>
            </div>
            <div className={styles.about_content_text}>
               <div className={`${styles.about_content_title} title `}>
                  ABOUT ME
               </div>
               <p>Hello! I am Inna - your reliable assistant in creating an impeccable and comfortable home.</p>
               <p>I have the professionalism and experience that allows me to do my job effectively. But for me it is much more important than just cleaning and polishing. I strive to create a special atmosphere where you can truly relax and feel at home.</p>
               <p>I am discrete and respect your privacy. You can fully rely on me and be sure that your home and personal belongings will be completely safe.</p>
            </div>
         </div>
      </div>
   </div>
   )
}

export default About;