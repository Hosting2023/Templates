import React from 'react';
import Accordion from '../Accordion/Accordion';
import styles from './Questions.module.scss';
const qustions = [
   {
      id: 1,
      title: "How often can you clean my home?",
      description: "By all standards, general cleaning is carried out at least once a week. You can clean 1 time per month according to the general format and 1 time per week according to the requirements of daily cleaning. Rooms are often cleaned at least once a day.",
   },
   {
      id: 2,
      title: "How much do your services cost?",
      description: "The cost of my services depends on the area of ​​​​the room/house and the frequency of cleaning."
   },
   {
      id: 3,
      title: "Are your cleaners reliable and trustworthy?",
      description: "Yes, our maids are reliable and trustworthy. They are vetted and trained to ensure they are professional and of a high standard.",
   },
   {
      id: 4,
      title: "Can you accommodate special requests or cleaning preferences?",
      description: "Yes, we can accommodate special cleaning requests or preferences.",
   },
   {
      id: 5,
      title: "How often can you clean my home?",
      description: "By all standards, general cleaning is carried out at least once a week. You can clean 1 time per month according to the general format and 1 time per week according to the requirements of daily cleaning. Rooms are often cleaned at least once a day.",
   },
   {
      id: 6,
      title: "How much do your services cost?",
      description: "The cost of my services depends on the area of ​​​​the room/house and the frequency of cleaning."
   },
   {
      id: 7,
      title: "Are your cleaners reliable and trustworthy?",
      description: "Yes, our maids are reliable and trustworthy. They are vetted and trained to ensure they are professional and of a high standard.",
   },
   {
      id: 8,
      title: "Can you accommodate special requests or cleaning preferences?",
      description: "Yes, we can accommodate special cleaning requests or preferences.",
   }
];

function Questions() {
   return (
      <div className={styles.question}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.title}>
               Questions
            </div>
            <div className={styles.question_content}>
               {qustions.map((item) => (
                  <Accordion
                     key={item.id}
                     title={item.title}
                     description={item.description}
                  />
               ))}
            </div>
            <div className={styles.line}></div>
         </div>
      </div>
   );
}

export default Questions;
