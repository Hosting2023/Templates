import { FC } from "react";
import styles from "./Services.module.scss";
import Image from 'next/image';
import services_spiral from "@/public/services.svg";
import services_1 from "@/public/services-1.svg";
import services_2 from "@/public/services-2.svg";
import services_3 from "@/public/services-3.svg";
import services_4 from "@/public/services-4.svg";
import services_spiral_2 from "@/public/services-spiral-1.svg";
import MoveLine from "../MoveLine/MoveLine";


const Services: FC = () => {
   return (
      <div className={styles.servic} id="services">
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.services_up}>
               <div className={`${styles.services_title} title`}>
                  Services
                  <Image
                     src={services_spiral}
                     alt="servisces"
                     className={styles.services_img}
                  />

               </div>
               <div className={styles.services_text}>
                  My services include such types of cleaning as: regular cleaning, window cleaning, after repairing, after relocation.You can learn more about them.
               </div>

            </div>
            <div className={styles.services_content}>
               <div className={styles.services_content_block_first}>
                  <div className={styles.block_down_img}>
                     <div className={styles.space_block}>
                     </div>
                     <Image
                        src={services_1}
                        alt={"services_1"}
                        className={styles.img}

                     />
                  </div>
                  <div className={styles.block_down_text}>
                     <div className={`${styles.services_title} title`}>
                        regular cleaning
                     </div>
                     <p>I will regularly come and do comprehensive cleaning, including vacuuming, dusting, cleaning work and surface care. This will help you keep your space fresh and comfortable throughout the week.</p>
                  </div>
               </div>
               <div className={styles.services_content_block_two}>

                  <div className={styles.block_down_text}>
                     <div className={`${styles.services_title} title`}>
                        window cleaning
                     </div>
                     <p>I will professionally and carefully wash windows, wipe off dust, stains and dirt, so that you can enjoy the cleanliness and beautiful views from the windows.</p>
                  </div>
                  <div className={styles.block_down_img}>

                     <Image
                        src={services_2}
                        alt={"services_1"}
                        className={styles.img}

                     />
                     <div className={styles.space_block}>
                     </div>
                  </div>
               </div>
               <div className={styles.services_content_block_three}>
                  <div className={styles.block_down_img}>

                     <Image
                        src={services_3}
                        alt={"services_1"}
                        className={styles.img}

                     />
                     <Image
                        src={services_spiral_2}
                        alt={"img_spiral"}
                        className={styles.img_spiral}

                     />
                  </div>
                  <div className={styles.block_down_text}>
                     <div className={`${styles.services_title} title`}>
                        after relocation
                     </div>
                     <p>After the move, I will carefully clean and tidy up the new premises, remove dust, remove traces of the move and prepare it for your stay.</p>
                  </div>
               </div>
               <div className={styles.services_content_block_four}>

                  <div className={styles.block_down_text}>
                     <div className={`${styles.services_title} title`}>
                        window cleaning
                     </div>
                     <p>I will professionally and carefully wash windows, wipe off dust, stains and dirt, so that you can enjoy the cleanliness and beautiful views from the windows.</p>
                  </div>
                  <div className={styles.block_down_img}>

                     <Image
                        src={services_4}
                        alt={"services_1"}
                        className={styles.img}

                     />
                     <div className={styles.space_block}>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.services_line}>
            <MoveLine word="FILTER" />
         </div>
      </div>
   )
}

export default Services