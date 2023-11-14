import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Pros.module.scss';
import ProsItem from './ProsItem';

const Pros: FC = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      image: 'quality',
      mainText: `${t('benefits_mainText1')}`,
      text: `${t('benefits_text1')}`,
    },
    {
      image: 'time',
      mainText: `${t('benefits_mainText2')}`,
      text: `${t('benefits_text2')}`,
    },
    {
      image: 'schedule',
      mainText: `${t('benefits_mainText3')}`,
      text: `${t('benefits_text3')}`,
    },
  ];

  return (
    <div className={styles.pros_wrapper}>
      <div className={styles.benefits_wrapper}>
        {benefits.map((item, i) => (
          <ProsItem
            image={item.image}
            mainText={item.mainText}
            text={item.text}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Pros;
