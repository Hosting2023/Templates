import { FC } from "react";
import styles from "./Main.module.scss";
import MoveLine from "../MoveLine/MoveLine";

const Main: FC = () => {
   return (
      <div className={styles.main}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.main_content}>
               <div className={styles.main_content_titles}>
                  <div className={styles.main_content_title}>
                     Cleanliness, comfort, impeccability:
                  </div>
                  <div className={styles.main_content_subtitle}>
                     maid service so you can enjoy your beautiful home
                  </div>
               </div>
            </div>
         </div>
         <MoveLine word="scroll down to explore" />
         <div className={styles.main_img}>
         </div>
         <div className={styles.padding}>
         </div>
      </div >
   )
}

export default Main