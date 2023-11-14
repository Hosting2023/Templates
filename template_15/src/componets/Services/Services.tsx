import { FC, useState } from "react";
import styles from "./Services.module.scss";
import Image from 'next/image';
import services_1 from "@/public/services_1.svg";
import services_2 from "@/public/services_2.svg";
const Services: FC = () => {
   return (<div className={styles.services} id="services">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={`${styles.services_title} title`}>
            services
         </div>
      </div>
      <div className={`${styles.wrapper_two} wrapper`}>
         <div className={styles.services_content}>
            <div className={styles.services_content_block_up}>
               <div className={styles.block_text}>
                  <div className={styles.block_text_main}>
                     <div className={`${styles.block_text_title} title`}>
                        Comprehensive
                        cleaning
                     </div>
                     <div className={styles.block_text_desxription}>
                        The maid offers a full range of cleaning services, including dusting, vacuuming, mopping, cleaning bathrooms, changing bed linen and ensuring general cleanliness. It ensures the precision of every surface to create fresh and pleasant products in the room.
                     </div>
                  </div>
               </div>
               <div className={styles.block_img}>
                  <div className={styles.block_img_wrapper}>
                     <Image
                        src={services_1}
                        alt="Picture of the author"
                        layout="responsive"
                     />
                  </div>
               </div>

            </div>
            <div className={styles.services_content_block_down}>
               <div className={styles.block_img}>
                  <div className={styles.block_img_wrapper}>
                     <div className={styles.block_img_block}></div>
                     <Image
                        src={services_2}
                        alt="Picture of the author"
                        layout="responsive"
                     />
                  </div>
               </div>
               <div className={styles.block_text}>
                  <div className={styles.block_text_main}>
                     <div className={`${styles.block_text_title} title`}>
                        Additional Services
                     </div>
                     <div className={styles.block_text_desxription}>
                        In addition to basic cleaning, the maid can offer additional services to meet the needs of guests. This may include delivery of extra towels, toiletries or linens, housekeeping upon request, and cleaning and organizing guests' personal items. The maid is ready to provide an individual approach and meet the special requirements of each guest.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   )
}


export default Services;




