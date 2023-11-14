import React, { FC, RefObject, useContext } from 'react';
import styles from './styles.module.scss';
import { menuItems } from '@/components/header/constants/MenuItems';
import { AppContext } from '../../../../pages/_app';
import { menuItemsHeb } from '@/components/header/constants/menuItemsHeb';
import SwitchLanguage from '@/components/switchLanguage';

export interface IMenuProps {
  benefitsRef?: RefObject<HTMLDivElement>;
  aboutMeRef?: RefObject<HTMLDivElement>;
  servicesRef?: RefObject<HTMLDivElement>;
  scheduleRef?: RefObject<HTMLDivElement>;
  reviewsRef?: RefObject<HTMLDivElement>;
  footerRef?: RefObject<HTMLDivElement>;
}

const Menu: FC<IMenuProps> = ({
  benefitsRef,
  aboutMeRef,
  servicesRef,
  scheduleRef,
  reviewsRef,
  footerRef,
}) => {
  const Heb = useContext(AppContext);
  const dataItems = Heb ? menuItemsHeb : menuItems;

  const handleClickButton = (item: string) => {
    switch (item) {
      case 'יתרונות':
      case 'Benefits': {
        benefitsRef?.current?.scrollIntoView();
        break;
      }
      case 'על אודות':
      case 'About': {
        aboutMeRef?.current?.scrollIntoView();
        break;
      }
      case 'שירותים':
      case 'Services': {
        servicesRef?.current?.scrollIntoView();
        break;
      }
      case 'לוח זמנים':
      case 'Schedule': {
        scheduleRef?.current?.scrollIntoView();
        break;
      }
      case 'ביקורות':
      case 'Reviews': {
        reviewsRef?.current?.scrollIntoView();
        break;
      }
      case 'אנשי קשר':
      case 'Contacts': {
        footerRef?.current?.scrollIntoView();
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        {dataItems.map((item, index) => (
          <button
            key={index}
            className={styles.menuLink}
            onClick={() => handleClickButton(item)}
          >
            <span className={styles.menuLinkText}>{item}</span>
          </button>
        ))}
        <SwitchLanguage />
      </div>
    </div>
  );
};

export default Menu;
