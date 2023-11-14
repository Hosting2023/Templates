import { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import styles from './Contacts.module.scss';
import amandaSvg from './assets/amanda.svg';
import ContactBlock from './ContactBlock';

const Contacts: FC = () => {
  const { t } = useTranslation();

  const contactItems = [
    `${t('contacts_1')}`,
    `${t('contacts_2')}`,
    `${t('contacts_3')}`,
  ];

  return (
    <div className={styles.contacts_page}>
      <h1 className={styles.contacts_page_header}>{t('contacts_title')}</h1>
      <div className={styles.contacts_content_wrapper}>
        <div className={styles.contacts_content_left}>
          <Image
            src={amandaSvg}
            alt="Amanda Image"
            className={styles.contacts_content_left_img}
          />
          <span className={styles.contacts_content_left_name}>
            {t('contacts_name')}
          </span>
          <span className={styles.contacts_content_left_text}>
            {t('contacts_text')}
          </span>
        </div>
        <div className={styles.contacts_content_right}>
          {contactItems.map((item, index) => (
            <ContactBlock contact={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
