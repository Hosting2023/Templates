import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import styles from './MyServices.module.scss';
import cleaningSvg from '@/public/assets/myServices/cleaning.svg';
import windowSvg from '@/public/assets/myServices/window.svg';
import repairingSvg from '@/public/assets/myServices/repairing.svg';
import relocationSvg from '@/public/assets/myServices/relocation.svg';

interface ServiceItemProps {
  name: string;
  text: string;
}

const ServiceItem: FC<ServiceItemProps> = ({ name, text }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.item_wrapper}>
      <div className={styles.item_image_wrapper}>
        <Image
          src={
            name === t('services_item1')
              ? cleaningSvg
              : name === t('services_item2')
              ? windowSvg
              : name === t('services_item3')
              ? repairingSvg
              : name === t('services_item4')
              ? relocationSvg
              : ''
          }
          alt="Service item img"
          className={styles.item_image}
        />
      </div>
      <span className={styles.item_name}>{name}</span>
      <span className={styles.item_text}>{text}</span>
    </div>
  );
};

export default ServiceItem;
