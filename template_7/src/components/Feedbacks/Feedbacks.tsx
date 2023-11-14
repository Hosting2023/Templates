import React, { FC, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import styles from './Feedbacks.module.scss';
import arrowSvg from '@/public/assets/reviews/arrow.svg';
import FeedbackBlock from './FeedbackBlock';

interface FeedbacksProps {}

const Feedbacks: FC<FeedbacksProps> = () => {
  const { t } = useTranslation();
  const [activePerson, setActivePerson] = useState(0);

  const feedbacks = [
    {
      name: `${t('fb_name1')}`,
      text: `${t('fb_text1')}`,
    },
    {
      name: `${t('fb_name2')}`,
      text: `${t('fb_text2')}`,
    },
    {
      name: `${t('fb_name3')}`,
      text: `${t('fb_text3')}`,
    },
  ];

  return (
    <div className={styles.fb_page} id={t('nav_feedbacks')}>
      <h2 className={styles.fb_title}>{t('fb_title')}</h2>
      <div className={styles.fb_content}>
        <button
          className={styles.fb_content_arrow_wrapper}
          disabled={activePerson === 0}
          onClick={() => setActivePerson(activePerson - 1)}
        >
          <Image
            src={arrowSvg}
            alt={'Arrow up'}
            className={styles.fb_content_arrow}
          />
        </button>
        <div className={styles.fb_content_center}>
          {feedbacks.map((item, idx) => (
            <FeedbackBlock
              name={item.name}
              text={item.text}
              key={idx}
              active={activePerson === idx}
              setActivePerson={setActivePerson}
              blockNum={idx}
            />
          ))}
        </div>
        <button
          className={styles.fb_content_arrow_wrapper}
          disabled={activePerson === 2}
          onClick={() => setActivePerson(activePerson + 1)}
        >
          <Image
            src={arrowSvg}
            alt={'Arrow up'}
            className={styles.fb_content_arrow_reverse}
          />
        </button>
      </div>
    </div>
  );
};

export default Feedbacks;
