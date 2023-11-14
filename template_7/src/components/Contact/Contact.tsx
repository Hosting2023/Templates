import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import styles from './Contact.module.scss';
import telegramSvg from '@/public/assets/contacts/telegram_white.svg';
import whatsAppSvg from '@/public/assets/contacts/whatsApp_white.svg';
import viberSvg from '@/public/assets/contacts/viber_white.svg';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const { t } = useTranslation();

  const listItems = [
    `${t('contacts_1')}`,
    `${t('contacts_2')}`,
    `${t('contacts_3')}`,
    `${t('contacts_4')}`,
  ];

  return (
    <div className={styles.contact_page} id={t('nav_contact')}>
      <div className={styles.contact_content}>
        <div className={styles.contact_content_left}>
          <h2 className={styles.contact_content_left_header}>
            {t('contacts_title')}
          </h2>
          <div className={styles.contact_content_left_list}>
            {listItems.map((item, idx) => (
              <span className={styles.contact_content_left_list_item} key={idx}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.contact_content_right}>
          <p className={styles.contact_content_right_parag}>
            {t('contacts_parag')}
          </p>
          <div className={styles.contact_content_right_messenger_wrapper}>
            <Image
              src={telegramSvg}
              alt={'Telergram img'}
              className={styles.contact_content_right_messenger}
            />
            <Image
              src={whatsAppSvg}
              alt={'WhatsApp img'}
              className={styles.contact_content_right_messenger}
            />
            <Image
              src={viberSvg}
              alt={'Viber img'}
              className={styles.contact_content_right_messenger}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
