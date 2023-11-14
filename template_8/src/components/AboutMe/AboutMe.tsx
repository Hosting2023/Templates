import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import styles from './AboutMe.module.scss';
import bgSvg from '@/../public/assets/backgrounds/aboutBg.svg';

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutMe_page} id={t('nav_about')}>
      <Image src={bgSvg} alt="About Me img" className={styles.aboutMe_bg} />
      <h2 className={styles.aboutMe_title}>{t('about_title')}</h2>
      <div className={styles.aboutMe_parag_wrapper}>
        <span className={styles.aboutMe_parag}>{t('about_parag')}</span>
      </div>
    </div>
  );
};

export default AboutMe;
