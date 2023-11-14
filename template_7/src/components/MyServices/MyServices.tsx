import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './MyServices.module.scss';
import ServiceItem from './ServiceItem';

interface MyServicesProps {}

const MyServices: FC<MyServicesProps> = () => {
  const { t } = useTranslation();

  const services = [
    {
      name: t('services_item1'),
      text: t('services_item1_text'),
    },
    {
      name: t('services_item2'),
      text: t('services_item2_text'),
    },
    {
      name: t('services_item3'),
      text: t('services_item3_text'),
    },
    {
      name: t('services_item4'),
      text: t('services_item4_text'),
    },
  ];

  return (
    <div className={styles.services_page} id={t('nav_services')}>
      <h2 className={styles.services_title}>{t('services_title')}</h2>
      <div className={styles.services_content}>
        <p className={styles.services_content_parag}>{t('services_parag')}</p>
        <div className={styles.services_content_right}>
          {services.map((item, idx) => (
            <ServiceItem name={item.name} text={item.text} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
