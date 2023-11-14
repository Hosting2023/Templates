import React, { FC, useState } from 'react';
import Image from 'next/image';

import styles from './Questions.module.scss';
import arrowSvg from '@/public/assets/questions/arrow.svg';

interface QuestionBlockProps {
  question: string;
  answer: string;
}

const QuestionBlock: FC<QuestionBlockProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={
        isOpen
          ? styles.questions_question_block_open
          : styles.questions_question_block
      }
    >
      <div className={styles.questions_question_block_top}>
        <span
          className={styles.questions_question_block_qText}
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
        </span>
        <Image
          src={arrowSvg}
          alt={'Arrow down img'}
          className={
            isOpen
              ? styles.questions_question_block_top_arrow_reverse
              : styles.questions_question_block_top_arrow
          }
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? (
        <span className={styles.questions_question_block_aText}>{answer}</span>
      ) : (
        ''
      )}
    </div>
  );
};

export default QuestionBlock;
