import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whatsapp from '@/assets/icons_footer/whatsapp.svg';
import telegram from '@/assets/icons_footer/telegram.svg';
import viber from '@/assets/icons_footer/viber.svg';
import styles from './styles.module.scss';

const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <div className={styles.links}>
          <Link
            href=""
            className={styles.link}
          >
            <Image
              src={telegram as unknown as string}
              alt="icon"
            />
          </Link>
          <Link
            href=""
            className={styles.link}
          >
            <Image
              src={whatsapp as unknown as string}
              alt="icon"
            />
          </Link>
          <Link
            href=""
            className={styles.link}
          >
            <Image
              src={viber as unknown as string}
              alt="icon"
            />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
