import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import styles from './Advantages.module.scss';
import completedSvg from '@/public/assets/advantages/completed.svg';
import qualitySvg from '@/public/assets/advantages/quality.svg';
import quickSvg from '@/public/assets/advantages/quick.svg';
import scheduleSvg from '@/public/assets/advantages/schedule.svg';

interface AdvantageBlockProps {
  name: string;
  text: string;
}

const AdvantageBlock: FC<AdvantageBlockProps> = ({ name, text }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.advantages_block_wrapper}>
      <div className={styles.advantages_block_image_wrapper}>
        <Image
          src={
            name === t('adv_item1')
              ? completedSvg
              : name === t('adv_item2')
              ? quickSvg
              : name === t('adv_item3')
              ? qualitySvg
              : name === t('adv_item4')
              ? scheduleSvg
              : ''
          }
          alt="Advantage img"
        />
      </div>
      <span className={styles.advantages_block_name}>{name}</span>
      <span className={styles.advantages_block_text}>{text}</span>
    </div>
  );
};

export default AdvantageBlock;
