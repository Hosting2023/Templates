import React, { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import styles from './Advantages.module.scss';
import advSvg from './assets/adv.svg';

interface AdvantagesProps {}

const Advantages: FC<AdvantagesProps> = () => {
  const { t } = useTranslation();

  const parags = [
    `${t('adv_parag1')}`,
    `${t('adv_parag2')}`,
    `${t('adv_parag3')}`,
  ];
  return (
    <div className={styles.advantages_page}>
      <div className={styles.advantages_content_left}>
        <Image src={advSvg} alt="Adv img" className={styles.advantages_img} />
      </div>
      <div className={styles.advantages_content_right}>
        <h1 className={styles.advantages_content_right_header}>
          {t('adv_title')}
        </h1>
        <div className={styles.advantages_content_right_bottom}>
          <div className={styles.advantages_content_right_bottom_parag_wrapper}>
            {parags.map((item, idx) => (
              <p
                className={styles.advantages_content_right_bottom_parag}
                key={idx}
              >
                {item}
              </p>
            ))}
          </div>
          <span className={styles.advantages_content_right_bottom_text}>
            {t('adv_text')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
