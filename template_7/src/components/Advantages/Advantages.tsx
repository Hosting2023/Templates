import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Advantages.module.scss';
import AdvantageBlock from './AdvantageBlock';

interface AdvantagesProps {}

const Advantages: FC<AdvantagesProps> = () => {
  const { t, i18n } = useTranslation();

  const advantages = [
    {
      name: t('adv_item1'),
      text: t('adv_item1_text'),
    },
    {
      name: t('adv_item2'),
      text: t('adv_item2_text'),
    },
    {
      name: t('adv_item3'),
      text: t('adv_item3_text'),
    },
    {
      name: t('adv_item4'),
      text: t('adv_item4_text'),
    },
  ];

  return (
    <div
      className={styles.advantages_page}
      style={
        i18n.language === 'he'
          ? { padding: '6% 8% 10% 4%' }
          : { padding: '6% 4% 10% 8%' }
      }
      id={t('nav_benefits')}
    >
      <div className={styles.advantages_content}>
        <p className={styles.advantages_content_parag}>{t('adv_parag')}</p>
        <div className={styles.advantages_content_bottom}>
          {advantages.map((item, idx) => (
            <AdvantageBlock name={item.name} text={item.text} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
