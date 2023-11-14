import { FC, useState } from 'react';
import cn from 'classnames';

import styles from './Questions.module.scss';
import plusSvg from './assets/plus.svg';
import minusSvg from './assets/minus.svg';
import Image from 'next/image';

interface QuestionBlockProps {
  question: string;
  answer: string;
}

const QuestionBlock: FC<QuestionBlockProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={cn(
        isOpen ? styles.questions_block_open : styles.questions_block,
      )}
    >
      <div
        className={cn(
          isOpen
            ? styles.questions_block_qWrapper_open
            : styles.questions_block_qWrapper,
        )}
      >
        <span className={styles.questions_block_qText}>{question}</span>
        <button
          className={styles.questions_block_plus_wrapper}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <Image
              src={plusSvg}
              alt="Plus icon"
              className={styles.questions_block_plus}
            />
          ) : (
            <Image
              src={minusSvg}
              alt="Minus icon"
              className={styles.questions_block_minus}
            />
          )}
        </button>
      </div>
      {isOpen ? (
        <div className={styles.questions_block_aWrapper}>
          <span className={styles.questions_block_aText}>{answer}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default QuestionBlock;
