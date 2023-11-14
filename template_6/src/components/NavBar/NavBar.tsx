import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './NavBar.module.scss';

interface NavBarProps {}

export const scrollToElement = (el: string) => {
  const targetElement = document.getElementById(el);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const NavBar: FC<NavBarProps> = () => {
  const { t } = useTranslation();

  const navItems = [
    `${t('nav_services')}`,
    `${t('nav_about')}`,
    `${t('nav_filter')}`,
    `${t('nav_schedule')}`,
    `${t('nav_feedbacks')}`,
    `${t('nav_contact')}`,
  ];

  return (
    <nav className={styles.nav_wrapper}>
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
  );
};

export default NavBar;
