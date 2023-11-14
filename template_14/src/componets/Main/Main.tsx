import { FC } from "react";
import styles from "./Main.module.scss";
import Image from 'next/image';
import main from '@/public/main_things.svg';

const Main: FC = () => {
   return (<div className={styles.main}>
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.main_content}>
            <div className={styles.main_content_text}>
               <div className={styles.text_big_title}>
                  Free yourself
                  from the hassle
                  of <span>cleaning</span>
               </div>
               <div className={styles.text_description}>
                  Trust us to clean your room
                  and enjoy your vacation
               </div>
               <a className={`${styles.main_btn} btn`} href="#filter">
                  Go to filter
               </a>
            </div>
            <div className={styles.main_content_img}>
               <div className={styles.img_block}>
                  <div className={styles.img}>
                     <Image
                        src={main}
                        alt="main"
                        layout="responsive"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   )
}


export default Main;