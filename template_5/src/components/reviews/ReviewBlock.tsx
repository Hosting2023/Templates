import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import styles from './Reviews.module.scss';
import MarcusSvg from './assets/marcus.svg';
import MarySvg from './assets/mary.svg';
import JacobSvg from './assets/jacob.svg';

interface ReviewBlockProps {
  name: string;
  text: string;
}

const ReviewBlock: FC<ReviewBlockProps> = ({ name, text }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.review_block}>
      <div className={styles.review_block_lines}>
        <div></div>
        <div></div>
      </div>
      <div className={styles.review_block_content}>
        <span className={styles.review_block_content_text}>{text}</span>
        <div className={styles.review_block_content_avatar_wrapper}>
          <Image
            src={
              name === `${t('reviews_name1')}`
                ? MarySvg
                : name === `${t('reviews_name2')}`
                ? MarcusSvg
                : name === `${t('reviews_name3')}`
                ? JacobSvg
                : ''
            }
            alt={'person Avatar'}
            className={styles.review_block_content_avatar_image}
          ></Image>
          <span className={styles.review_block_content_avatar_name}>
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewBlock;
