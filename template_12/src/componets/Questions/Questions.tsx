import { FC } from "react";
import styles from "./Questions.module.scss";
import Accordion from "../Accordion/Accordion";

const qustions = [
   {
      id: 1,
      title: "What services are included in the regular cleaning package?",
      description: "Our regular cleaning package includes vacuuming, dusting, floor cleaning, bathroom and kitchen cleaning, and trash removal.",
   },
   {
      id: 2,
      title: "How long does it usually take to clean up after a move or renovation?",
      description: "The time it takes to clean up after a move or renovation depends on the size and condition of the space. We guarantee a thorough and efficient cleaning so that your premises are ready for use as soon as possible."
   },
   {
      id: 3,
      title: "Can you provide laundry and ironing services?",
      description: "We use professional window cleaners and tools that keep the windows clean and bright. I also have the experience and skill to use the right techniques to achieve flawless results.",
   },
   {
      id: 4,
      title: "Can you accommodate special requests or cleaning preferences?",
      description: "Yes, we can provide laundry and ironing services. This can be included in your individual package or as an additional service upon your request.",
   },

];
const Questions: FC = () => {
   return (<div className={styles.question}>
      <div className={`${styles.wrapper} wrapper`}>
         <div className={`${styles.questions_title} title `}>
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
      </div>
   </div>
   )
}


export default Questions;
