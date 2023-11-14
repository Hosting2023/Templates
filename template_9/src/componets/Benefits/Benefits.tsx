import React from 'react';
import styles from './Benefits.module.scss';
type BenefitItem = {
   img: string;
   title: string;
   description: string;
};

const items: BenefitItem[] = [
   {
      img: "/icon-calendar.svg",
      title: "Completed work",
      description: "Proven professionals with honest reviews",
   },
   {
      img: "/icon-time.svg",
      title: "Quick search",
      description: "You can find the right artist in a few minutes",
   },
   {
      img: "/icon-sucsses.svg",
      title: "Quality assurance",
      description: "We provide a guarantee for the work performed",
   },
   {
      img: "/icon-notes.svg",
      title: "Convenient schedule",
      description: "Possibility to choose a date convenient for you",
   },
];

function BenefitItem({ img, title, description }: BenefitItem) {
   return (
      <div className={styles.benefits_content}>
         <img src={img} alt="" />
         <div className={styles.benefits_content_text}>
            <div className={styles.benefits_content_text_title}>{title}</div>
            <div className={styles.benefits_content_text_description}>{description}</div>
         </div>
      </div>
   );
}

function Benefits() {
   return (
      <div className={styles.benefits}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.hidden_title}>
               Our company will help you select and order a maid to clean your apartment or cottage.
            </div>
            <div className={styles.title}>Benefits</div>
            <div className={styles.items}>
               {items.map((item, index) => (
                  <BenefitItem key={index} img={item.img} title={item.title} description={item.description} />
               ))}
            </div>
         </div>
      </div>
   );
}

export default Benefits;
