import { FC } from "react"
import styles from "./About.module.scss"
import Image from 'next/image';
import about from '@/public/about.svg';
import girl from '@/public/girl.svg';
import MoveLine from "../MoveLine/MoveLine";
const About: FC = () => {
   return (
      <div className={styles.about}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={`${styles.about_title} title`}>
               About me
               <Image
                  src={about}
                  alt="about"
                  className={styles.about_img}
               />
            </div>
            <div className={styles.about_content}>
               <div className={styles.about_content_block_up}>
                  <div className={styles.block_up_me}>
                     My name is Masha and i am a maid
                  </div>
                  <div className={styles.block_up_info}>
                     I am the housekeeper who will help make your home visible! I have been cleaning for several years now, so I have experience and access to wide tasks.
                  </div>
               </div>
               <div className={styles.about_content_block_down}>
                  <div className={styles.block_down_img}>
                     <div className={styles.space_block}>
                     </div>
                     <Image

                        src={girl}
                        alt={"girl"}
                        className={styles.img}
                     />
                  </div>
                  <div className={styles.block_down_text}>
                     <p>Hello! I am a maid, and my mission is to create an atmosphere of impeccable cleanliness and comfort in your home. I pay special attention to every detail, so that your space becomes the perfect decoration in which you can relax and enjoy the comfort.</p>
                     <p>My work includes not only surface cleaning, but also a careful approach to each room. I use effective methods and quality products to ensure deep and thorough cleaning. I know that every home has its own characteristics, so I am ready to adapt to your requirements and preferences.</p>
                     <p>If you are looking for a reliable, professional and friendly maid, call me now! I will gladly accept the challenge and make your home cleaner, cozier and more pleasant to live in.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.about_line}>
            <MoveLine word="cleaning frequency" />
         </div>
      </div>
   )
}

export default About