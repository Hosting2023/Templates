import React, { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import styles from './MyServices.module.scss';
import serviceSvg from './assets/service.svg';
import ListItem from './ListItem';

interface MyServicesProps {}

const MyServices: FC<MyServicesProps> = () => {
  const { t } = useTranslation();

  const listItem = [
    {
      name: `${t('services_item1')}`,
      text: [
        `${t('services_item1_text1')}`,
        `${t('services_item1_text2')}`,
        `${t('services_item1_text3')}`,
        `${t('services_item1_text4')}`,
        `${t('services_item1_text5')}`,
        `${t('services_item1_text6')}`,
      ],
    },
    {
      name: `${t('services_item2')}`,
      text: [
        `${t('services_item2_text1')}`,
        `${t('services_item2_text2')}`,
        `${t('services_item2_text3')}`,
      ],
    },
    {
      name: `${t('services_item3')}`,
      text: [
        `${t('services_item3_text1')}`,
        `${t('services_item3_text2')}`,
        `${t('services_item3_text3')}`,
        `${t('services_item3_text4')}`,
        `${t('services_item3_text5')}`,
      ],
    },
    {
      name: `${t('services_item4')}`,
      text: [
        `${t('services_item4_text1')}`,
        `${t('services_item4_text2')}`,
        `${t('services_item4_text3')}`,
        `${t('services_item4_text4')}`,
        `${t('services_item4_text5')}`,
      ],
    },
  ];
  return (
    <div className={styles.services_page} id={t('nav_services')}>
      <div className={styles.services_content_left}>
        <Image
          src={serviceSvg}
          alt="Service img"
          className={styles.services_img}
        />
      </div>
      <div className={styles.services_content_right}>
        <h1 className={styles.services_content_right_header}>
          {t('services_title')}
        </h1>
        <div className={styles.services_content_right_bottom}>
          <div className={styles.services_content_right_bottom_parag_wrapper}>
            <p className={styles.services_content_right_bottom_parag}>
              {t('services_parag')}
            </p>
          </div>
          <span className={styles.services_content_right_bottom_text}>
            {t('services_text')}
          </span>
        </div>
        <li className={styles.services_content_right_list}>
          {listItem.map((item, idx) => (
            <ListItem name={item.name} text={item.text} key={idx} />
          ))}
        </li>
      </div>
    </div>
  );
};

export default MyServices;
