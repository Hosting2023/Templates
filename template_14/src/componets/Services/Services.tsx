import { FC, useState } from "react";
import styles from "./Services.module.scss";
import Image from 'next/image';
import icon_1 from '@/public/icon_1.svg';
import icon_2 from '@/public/icon_2.svg';
import icon_3 from '@/public/icon_3.svg';
import icon_4 from '@/public/icon_4.svg';


const dataServices = [
   {
      img: icon_1,
      title: "To your health",
      text: "Customizable cleaning services to meet your specific preferences "
   },
   {
      img: icon_2,
      title: "To your safety",
      text: "You can 100% trust me: before starting work, i go through 5 stages of internship and theoretical training."
   },
   {
      img: icon_3,
      title: "To your peace",
      text: "I am instructed on the responsible and careful attitude to your property."
   },
   {
      img: icon_4,
      title: "Cleaning quality",
      text: "My mission is perfect cleanliness in which every client will be happy. "
   },
]
const Services: FC = () => {
   return (<div className={styles.services} id="services">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.services_title_block}>
            <div className={styles.services_block_square}>
            </div>
            <div className={`${styles.services_title} title`}>
               I care
            </div>
         </div>
         <div className={styles.services_content}>
            {
               dataServices.map((item, index) => {
                  return (
                     <div className={styles.services_content_block} key={index}>

                        <div className={styles.services_content_img}>
                           <Image
                              src={item.img}
                              alt="icon"
                              layout="responsive"
                           />
                        </div>
                        <div className={styles.services_content_title}>
                           {item.title}
                        </div>
                        <div className={styles.services_content_text}>
                           {item.text}
                        </div>
                     </div>
                  )
               }
               )
            }

         </div>
         <div className={styles.services_content_mobile}>
            <div className={styles.services_content_up}>
               {
                  dataServices.slice(0, 2).map((item, index) => {
                     return (
                        <div className={styles.services_content_block} key={index}>

                           <div className={styles.services_content_img}>
                              <Image
                                 src={item.img}
                                 alt="icon"
                                 layout="responsive"
                              />
                           </div>
                           <div className={styles.services_content_title}>
                              {item.title}
                           </div>
                           <div className={styles.services_content_text}>
                              {item.text}
                           </div>
                        </div>
                     )
                  }
                  )
               }
            </div>
            <div className={styles.services_content_down}>     {
               dataServices.slice(2, 4).map((item, index) => {
                  return (
                     <div className={styles.services_content_block} key={index}>

                        <div className={styles.services_content_img}>
                           <Image
                              src={item.img}
                              alt="icon"
                              layout="responsive"
                           />
                        </div>
                        <div className={styles.services_content_title}>
                           {item.title}
                        </div>
                        <div className={styles.services_content_text}>
                           {item.text}
                        </div>
                     </div>
                  )
               }
               )
            }</div>
         </div>

      </div>

   </div>
   )
}


export default Services;




