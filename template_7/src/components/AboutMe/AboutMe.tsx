import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import styles from './AboutMe.module.scss';
import personSvg from '@/public/assets/about/person.svg';
interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutMe_page} id={t('nav_about')}>
      <div className={styles.aboutMe_content}>
        <p className={styles.aboutMe_text}>{t('about_parag')}</p>
        <div className={styles.aboutMe_image_wrapper}>
          <Image
            src={personSvg}
            alt="Person img"
            className={styles.aboutMe_image}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
