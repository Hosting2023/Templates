import { FC } from "react";
import styles from "./Main.module.scss";
import Image from 'next/image';
import main from "@/public/main.svg";

const Main: FC = () => {
   return (<div className={styles.main}>
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.main_content}>
            <div className={styles.main_content_text}>
               <div className={styles.text_title_big}>
                  Cleaning Delight:
                  <div className={`${styles.squire} ${styles.top_left}`}></div>
                  <div className={`${styles.squire} ${styles.top_right}`}></div>
                  <div className={`${styles.squire} ${styles.bottom_left}`}></div>
                  <div className={`${styles.squire} ${styles.bottom_right}`}></div>
               </div>

               <p>  Immerse yourself
                  in cleanliness and
                  comfort with us!
               </p>
               <a className={`${styles.main_btn} btn`} href="#filter">
                  Go to filter
               </a>
            </div>
            <div className={styles.main_content_img}>
               <div className={styles.img_wrapper}>
                  <Image
                     src={main}
                     alt="main"
                     layout="responsive"
                  />
                  <div className={styles.img_shadow}>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   )
}


export default Main;