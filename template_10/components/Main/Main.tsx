import { FC } from "react";
import styles from "./Main.module.scss";
import Image from "next/image";
import ball from "@/public/water-ball.svg";

const Main: FC = () => {
   return (
      <div className={styles.main}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.main_content}>
               <div className={styles.main_text}>
                  <p className={styles.descriptipn}>Welcome to the world of carefree comfort and perfect cleanliness.
                     Our maid is a true expert in creating and maintaining impeccable cleanliness in your
                     home. Free yourself from everyday troubles, trust my professionalism.</p>
                  <button className={`${styles.btn} btn`}>
                     <a href="#filter">  GO TO FILTER</a>
                  </button>
               </div>
               <div className={styles.main_img}>
                  <Image
                     src={ball}
                     className={styles.img}
                     alt={"main"}
                     width={300}
                     height={200}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Main;
