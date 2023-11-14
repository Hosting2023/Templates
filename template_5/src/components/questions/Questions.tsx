import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Questions.module.scss';
import QuestionBlock from './QuestionBlock';

const Questions: FC = () => {
  const { t } = useTranslation();

  const questions = [
    {
      question: `${t('questions_1')}`,
      answer: `${t('questions_1_answer')}`,
    },
    {
      question: `${t('questions_2')}`,
      answer: `${t('questions_2_answer')}`,
    },
    {
      question: `${t('questions_3')}`,
      answer: `${t('questions_3_answer')}`,
    },
    {
      question: `${t('questions_4')}`,
      answer: `${t('questions_4_answer')}`,
    },
    {
      question: `${t('questions_5')}`,
      answer: `${t('questions_5_answer')}`,
    },
  ];

  return (
    <div className={styles.questions_page}>
      <h1 className={styles.questions_header}>{t('questions_title')}</h1>
      <div className={styles.questions_wrapper}>
        {questions.map((item, index) => (
          <QuestionBlock
            question={item.question}
            answer={item.answer}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;
