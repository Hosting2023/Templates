import React from 'react';
import styles from "./Questions.module.scss";

interface CardProps {
    id: string;
    title: string;
    description: string;
}

const QuestionCard: React.FC<CardProps> = ({title, description}) => {
  return (
    <div className={styles.questionCard}>
        <div className={styles.CardTitle}>
            <h2>{title}</h2>
        </div>
        <div className={styles.cardDescription}>
            <span>{description}</span>
        </div>
        
    </div>
  );
};

export default QuestionCard;