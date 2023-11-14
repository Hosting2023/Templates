import { FC } from "react";
import styles from "./Section.module.scss";
import Image from 'next/image';
import MoveLime from "../MoveLine/MoveLine";
import section_1 from '@/public/section-1.svg';
import section_2 from '@/public/section-2.svg';
import section_3 from '@/public/section-3.svg';
import section_spiral_1 from '@/public/section-spiral-1.svg';
import section_spiral_2 from '@/public/section-spiral-2.svg';
import section_spiral_3 from '@/public/section-spiral-3.svg';

const Section: FC = () => {
   return (
      <div className={styles.services}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.services_content}>
               <div className={styles.services_content_first}>
                  <div className={styles.block_img}>
                     <Image
                        src={section_1}
                        alt="image"
                     />
                  </div>
                  <div className={styles.block_text}>
                     <div className={styles.block_text_main} >
                        <div className={`${styles.block_text_title} title-big`}>
                           One-time cleaning
                           <Image
                              src={section_spiral_1}
                              alt="image"
                           />
                        </div>
                        <div className={styles.block_text_description}>
                           A one-time cleaning refers to a single session of deep cleaning or thorough tidying up of a space, such as a home, office, or any other area. It is typically performed on an irregular basis and is not part of a regular cleaning routine.
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.services_content_two}>
                  <div className={styles.block_text}>
                     <div className={styles.block_text_main} >
                        <div className={`${styles.block_text_title} title-big`}>
                           Twice a week
                           <Image
                              src={section_spiral_2}
                              alt="image"
                           />
                        </div>
                        <div className={styles.block_text_description}>
                           Cleaning "twice a week" refers to performing cleaning tasks or maintenance activities two times within a week. This frequency implies that the space is cleaned on a more regular basis, allowing for the upkeep of cleanliness and tidiness throughout the week.
                        </div>
                     </div>
                  </div>
                  <div className={styles.block_img}>
                     <Image
                        src={section_2}
                        alt="image"
                     />
                  </div>
               </div>
               <div className={styles.services_content_three}>
                  <div className={styles.block_img}>
                     <Image
                        src={section_3}
                        alt="image"
                        className={styles.hide_img}
                     />
                     <Image
                        src={section_spiral_3}
                        alt="image"
                        className={styles.block_img_spiral}
                     />
                  </div>
                  <div className={styles.block_text}>
                     <div className={styles.block_text_main} >
                        <div className={`${styles.block_text_title} title-big`}>
                           One-time cleaning

                        </div>
                        <div className={styles.block_text_description}>
                           A one-time cleaning refers to a single session of deep cleaning or thorough tidying up of a space, such as a home, office, or any other area. It is typically performed on an irregular basis and is not part of a regular cleaning routine.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.section_line}>
            <MoveLime word="services i offer" />
         </div>
      </div >
   )
}

export default Section
