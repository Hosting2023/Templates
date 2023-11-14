import React from 'react';
import styles from './Main.module.scss';

function Main() {
   return (
      <div className={styles.main}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.main_content}>
               <div className={styles.main_content_text}>
                  <img src="/start.svg" alt="Start" />
                  <div className={styles.main_content_text_title}>
                     Transform your space with our expert Cleaning Services - Experience the Difference Today!
                  </div>
                  <button className={styles.button}>
                     Schedule
                  </button>
               </div>
               <div className={styles.main_content_img}>
                  <img className={styles.girl_img} src="/girl.svg" alt="Girl" />
                  <img className={styles.clear_img} src="/clear.svg" alt="Clear" />
               </div>
            </div>
            <div className={styles.line}></div>
         </div>
      </div>
   );
}

export default Main;
