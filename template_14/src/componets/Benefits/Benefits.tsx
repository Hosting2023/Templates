import { FC, useState, useEffect } from "react";
import styles from "./Benefits.module.scss";
import Image from 'next/image';
import girl from "@/public/girl.svg";
import { dataBenefits } from "@/assets/main";
import BenefitBlock from "../BenefitBlock/BenefitBlock";

const Benefits: FC = () => {
   const isBrowser = typeof window !== 'undefined';
   const [hydrated, setHydrated] = useState(false);
   useEffect(() => {
      setHydrated(true);
   }, []);

   const [windowWidth, setWindowWidth] = useState<number>(isBrowser ? window.innerWidth : 0);
   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [windowWidth]);

   const filteredDataBenefits = windowWidth < 590 ? [dataBenefits[1]] : dataBenefits;
   const dataBenefitsMobile = dataBenefits.filter((_, index) => index !== 1);

   return (
      <>
         {hydrated && (
            <div className={styles.benefits} id="adventages">
               <div className={`${styles.wrapper} wrapper`}>
                  <div className={styles.benefits_content}>
                     <div className={styles.benefits_content_img}>
                        <div className={styles.img_block}>
                           <Image src={girl} alt="girl" />
                        </div>
                     </div>
                     <div className={styles.benefits_content_text}>
                        <div className={styles.benefits_title_block}>
                           <div className={styles.benefits_block_square}></div>
                           <div className={`${styles.benefits_title} title`}>My benefits</div>
                        </div>
                        <div className={styles.benefits_text}>
                           Providing irreplaceable services so that you enjoy the important moments that are important to you
                        </div>
                        <div className={styles.benefits_blocks}>
                           {filteredDataBenefits.map((item, index) => (
                              <BenefitBlock key={index} title={item.title} description={item.description} img={item.img} />
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className={styles.benefits_content_mobile}>
                     {dataBenefitsMobile.map((item, index) => (
                        <BenefitBlock key={index} title={item.title} description={item.description} img={item.img} />
                     ))}
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default Benefits;
