import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Contact.module.scss';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const { t } = useTranslation();

  const contacts = [t('contacts_1'), t('contacts_2'), t('contacts_3')];

  return (
    <div className={styles.contact_page} id={t('nav_contact')}>
      <div className={styles.contact_content}>
        {contacts.map((item, index) => (
          <span key={index} className={styles.contact_text}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Contact;
