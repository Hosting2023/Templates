import { FC } from "react";
import styles from "./FQA.module.scss";


const questions = [
   {
      question: "Do you have any recommendations for preparing a room for cleaning?",
      answer: "For maximum cleaning efficiency, it is recommended to free surfaces from personal belongings and objects. If you have any special requirements or wishes, please let us know in advance so that we can take them into account when planning your cleaning."
   },
   {
      question: "How do you solve problems if I am not completely satisfied with the cleaning result?",
      answer: "Your satisfaction is our priority. If you are not completely satisfied with the cleaning result, please contact our team within 24 hours after the cleaning and we will be happy to solve any problems. We guarantee your complete satisfaction and will make every effort to correct any shortcomings."
   },
   {
      question: "What happens if something in my house is accidentally damaged while cleaning?",
      answer: "We take all necessary precautions and care when performing work. However, in the event that anything is accidentally damaged during cleaning, please notify us immediately. We will consider each situation individually and take all necessary steps to repair or compensate."
   }, {
      question: "How often do you recommend regular cleaning to keep your home clean?",
      answer: "The recommended frequency of regular cleaning depends on the individual needs and characteristics of your home. Generally, regular cleaning once or twice a week is recommended, but we can offer you a more flexible schedule to suit your needs and preferences."
   }
]
const FQA: FC = () => {
   return (
      <div className={styles.fqa}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={`${styles.fqa_title} title`}>
               FQA
            </div>
            <div className={styles.fqa_content}>
               <div className={styles.fqa_content_main}>
                  {questions.map((item, index): any => {
                     return (
                        <div key={index} className={styles.fqa_content_block}>
                           <div className={styles.fqa_content_question}>
                              {item.question}
                           </div>
                           <div className={styles.fqa_content_answer}>
                              {item.answer}
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </div>
   )
}

export default FQA;