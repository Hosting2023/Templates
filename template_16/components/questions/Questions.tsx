import React from "react";
import styles from "./Questions.module.scss";
import QuestionCard from "./QuestionCard";

const data = [
  {
    id: "1",
    title: "1. What does your maid service include?",
    description:
      "Service includes a range of cleaning and housekeeping tasks, such as dusting, vacuuming, mopping, bathroom and kitchen cleaning, laundry, and other tasks as requested by the client.",
  },
  {
    id: "2",
    title: "2. Are your cleaning products and equipment safe?",
    description:
      "Yes, i use high-quality cleaning products and equipment that are safe for use in homes and offices.",
  },
  {
    id: "3",
    title: "3. Can I schedule a one-time cleaning, or do you only offer periodic services?",
    description:
      "There are both one-time and periodic cleaning services. You can schedule services at any time convenient for you.",
  },
  {
    id: "4",
    title: "4. How do I schedule maid services with your company?",
    description:
      "You can schedule maid services with us by emails, or through our online booking system.",
  },
];

const Questions: React.FC = () => {
  return (
    <div className={styles.questions}>
      <div className={styles.questionsHeader}>
        <h2>questions</h2>
      </div>
      <div className={styles.questionsCards}>
        {data.map((card, idx) => {
          return (
            <QuestionCard
              key={idx}
              id={card.id}
              title={card.title}
              description={card.description}
            />
          );
        })}
        <button className={styles.cardButton}>More</button>
      </div>
    </div>
  );
};

export default Questions;
