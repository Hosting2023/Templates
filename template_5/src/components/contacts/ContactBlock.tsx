import { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import styles from './Contacts.module.scss';
import telegramSvg from './assets/telegram.svg';
import viberSvg from './assets/viber.svg';
import whatsappSvg from './assets/whatsapp.svg';

interface ContactBlockProps {
  contact: string;
}

const ContactBlock: FC<ContactBlockProps> = ({ contact }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.contacts_content_right_block}>
      <div className={styles.contacts_content_right_icon_wrapper}>
        <Image
          src={
            contact === `${t('contacts_1')}`
              ? telegramSvg
              : contact === `${t('contacts_2')}`
              ? viberSvg
              : contact === `${t('contacts_3')}`
              ? whatsappSvg
              : ''
          }
          alt="Contact Icon"
          className={styles.contacts_content_right_icon}
        />
      </div>
      <span className={styles.contacts_content_right_block_text}>
        {contact}
      </span>
    </div>
  );
};

export default ContactBlock;
