import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Questions.module.scss';
import QuestionBlock from './QuestionBlock';

const Questions: FC = () => {
  const { t } = useTranslation();

  const questions = [
    {
      question: `${t('question_1')}`,
      answer: `${t('question_1_text')}`,
    },
    {
      question: `${t('question_2')}`,
      answer: `${t('question_2_text')}`,
    },
    {
      question: `${t('question_3')}`,
      answer: `${t('question_3_text')}`,
    },
    {
      question: `${t('question_4')}`,
      answer: `${t('question_4_text')}`,
    },
    {
      question: `${t('question_5')}`,
      answer: `${t('question_5_text')}`,
    },
  ];

  return (
    <div className={styles.questions_page}>
      <h2 className={styles.questions_title}>{t('question_title')}</h2>
      <div className={styles.questions_wrapper}>
        {questions.map((item, idx) => (
          <QuestionBlock
            key={idx}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;
