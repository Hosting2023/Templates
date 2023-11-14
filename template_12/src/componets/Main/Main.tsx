import { FC } from "react";
import styles from "./Main.module.scss";
import Image from 'next/image';
import girl from '@/public/girl.svg'
import square from '@/public/main-square.svg'
const Main: FC = () => {
   return (<div className={styles.main}>
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.main_content}>
            <div className={styles.main_content_text}>
               <Image
                  src={square}
                  alt="square"
                  className={styles.square}
               />
               <h1 className={styles.main_content_title_big}>
                  A unique combination
                  of comfort and perfection
               </h1>
               <div className={styles.main_content_description}>
                  Entrust your home to me, and I will create
                  a space of impeccable cleanliness and comfort
               </div>
               <button
                  className={`${styles.btn} btn`}
               >Order</button>
            </div>

            <div className={styles.main_content_img}>
               <Image
                  alt="girl"
                  src={girl} />
               <div className={styles.circle}>
               </div>
            </div>
         </div>
      </div>
   </div>
   )
}


export default Main;