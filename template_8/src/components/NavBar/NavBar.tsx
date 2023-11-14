import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './NavBar.module.scss';
import languageSvg from '@/../public/assets/buttons/language.svg';
import Image from 'next/image';

interface NavBarProps {}

export const scrollToElement = (el: string) => {
  const targetElement = document.getElementById(el);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const NavBar: FC<NavBarProps> = () => {
  const { t, i18n } = useTranslation();
  const [activeLng, setActiveLng] = useState<'en' | 'he'>('en');
  const [listActive, setListActive] = useState<boolean>(false);
  const ref = useRef<HTMLUListElement>(null);

  const navItems = [
    `${t('nav_services')}`,
    `${t('nav_about')}`,
    `${t('nav_schedule')}`,
    `${t('nav_contact')}`,
  ];

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event?.target)) {
        setListActive(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className={styles.nav_wrapper}>
      <nav className={styles.nav}>
        {navItems.map((item, idx) => (
          <span
            className={styles.nav_text}
            key={idx}
            onClick={() => {
              scrollToElement(item);
            }}
          >
            {item}
          </span>
        ))}
      </nav>
      <button className={styles.lng_btn_wrapper}>
        <Image
          src={languageSvg}
          alt={'Language img'}
          className={styles.lng_btn}
        />
        <span
          className={styles.lng_text}
          onClick={() => setListActive(!listActive)}
        >
          {activeLng.toLocaleUpperCase()}
        </span>
        {listActive ? (
          <ul className={styles.lng_list} ref={ref}>
            <li
              onClick={() => {
                i18n.changeLanguage('en');
                setActiveLng('en');
                setListActive(false);
              }}
              className={styles.lng_list_item}
            >
              English
            </li>
            <li
              onClick={() => {
                i18n.changeLanguage('he');
                setActiveLng('he');
                setListActive(false);
              }}
              className={styles.lng_list_item}
            >
              Hebrew
            </li>
          </ul>
        ) : (
          ''
        )}
      </button>
    </div>
  );
};

export default NavBar;
