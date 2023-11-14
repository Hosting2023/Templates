import React, { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import styles from './Bath.module.scss';
import bathSvg from './assets/bath.svg';

interface BathProps {}

const Bath: FC<BathProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.bath_page}>
      <Image src={bathSvg} alt="Bath img" className={styles.bath_bg} />
      <p className={styles.bath_text}>{t('bath_text')}</p>
    </div>
  );
};

export default Bath;
