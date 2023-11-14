import { FC, useEffect, useState } from "react";
import styles from "./Benefits.module.scss";
import Image from 'next/image'
import bucket from "@/public/bucket.svg"

interface IBenefitsItem {
   title: string;
   description: string;
}
const benefits: IBenefitsItem[] = [
   {
      title: "Professional approach ",
      description: "I have experience and professional skills in the field of cleaning. I know how to effectively clean different types of surfaces, using the right products and tools to achieve a flawless result."
   },
   {
      title: "High Quality Work",
      description: "Every surface, every nook and cranny and every object in your space will be meticulously cleaned and tidy. I will not leave a single speck of dust or speck."
   }, {
      title: "Privacy",
      description: "I value and respect the privacy policy. Your personal belongings and privacy will be fully protected. I respect your privacy and do not disclose any information that may violate your privacy."
   },
   {
      title: "Efficiency and Speed",
      description: "Efficiency and Speed: As an experienced maid, I have the skills and strategies to clean efficiently and quickly. I optimize my time and use efficient cleaning methods to make the process as efficient as possible."
   }
]

const BenefitsBlock: FC<IBenefitsItem> = ({ title, description }) => {
   return (
      <div className={styles.benefits_content_block}>
         <div className={`${styles.benefits_content_block_title} title`}>
            {title}
         </div>
         <div className={styles.benefits_content_block_description}>
            {description}
         </div>
      </div>
   )
}



const Benefits = () => {
   return (<div className={styles.benefits} id="benefits">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.block_down}>
            <div className={`${styles.squire} ${styles.top_left}`}></div>
            <div className={`${styles.squire} ${styles.top_right}`}></div>
            <div className={`${styles.squire} ${styles.bottom_left}`}></div>
            <div className={`${styles.squire} ${styles.bottom_right}`}></div>
         </div>
         <div className={styles.benefits_content}>
            <div className={styles.benefits_conten_text}>
               {
                  benefits.map((item: IBenefitsItem, index: number) => {
                     return <BenefitsBlock key={index} title={item.title} description={item.description} />
                  })
               }
            </div>
            <div className={styles.benefits_content_img}>
               <div className={styles.img_text}>
                  <div className={`${styles.block_text_title} title`}>
                     My benefits
                  </div>  <div className={styles.img_text_description}> I have professional skills and rich experience in the field of cleaning and here are some of my advantages </div>
               </div>
               <div className={styles.img_wrapper}>
                  <Image
                     src={bucket}
                     alt="Picture of the author"
                     layout="responsive"
                  />
               </div>
            </div>
         </div>
      </div>
   </div>
   )
}


export default Benefits;