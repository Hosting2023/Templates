import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './NavBar.module.scss';
import MainButton from '@/src/ui/Buttons/MainButton/MainButton';

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
    `${t('nav_about')}`,
    `${t('nav_benefits')}`,
    `${t('nav_services')}`,
    `${t('nav_schedule')}`,
  ];

  return (
    <nav className={styles.nav_wrapper}>
      {navItems.map((item, idx) => (
        <div
          className={styles.nav_block}
          key={idx}
          onClick={() => {
            scrollToElement(item);
          }}
        >
          <MainButton item={item} width={'100%'} />
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
