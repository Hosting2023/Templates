import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import styles from './AboutMe.module.scss';
import ritaSvg from './assets/rita.svg';

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutMe_page} id={t('nav_about')}>
      <div className={styles.aboutMe_content}>
        <div className={styles.aboutMe_content_left}>
          <h1 className={styles.aboutMe_content_left_header}>
            {t('about_title')}
          </h1>
          <p className={styles.aboutMe_content_left_parag}>
            {t('about_parag')}
          </p>
          <span className={styles.aboutMe_content_left_text}>
            {t('about_text')}
          </span>
        </div>
        <div className={styles.aboutMe_content_right}>
          <Image
            src={ritaSvg}
            alt="Rita img"
            className={styles.aboutMe_content_right_image}
          />
          <span className={styles.aboutMe_content_right_name}>
            {t('about_name')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
