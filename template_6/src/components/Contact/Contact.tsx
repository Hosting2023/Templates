import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import styles from './Contact.module.scss';
import bgSvg from './assets/bg.svg';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const { t } = useTranslation();

  const messengers = [
    `${t('contacts_3')}`,
    `${t('contacts_2')}`,
    `${t('contacts_1')}`,
  ];

  return (
    <div className={styles.contact_page} id={t('nav_contact')}>
      <Image
        src={bgSvg}
        alt="Contacts background"
        className={styles.contact_bg}
      />
      <div className={styles.contact_content}>
        <h1 className={styles.contact_content_header}>{t('contacts_title')}</h1>
        <div className={styles.contact_content_bottom}>
          <p className={styles.contact_content_bottom_parag}>
            {t('contacts_parag')}
          </p>
          <div className={styles.contact_content_bottom_messenger_wrapper}>
            {messengers.map((item, index) => (
              <span
                className={styles.contact_content_bottom_messenger}
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
