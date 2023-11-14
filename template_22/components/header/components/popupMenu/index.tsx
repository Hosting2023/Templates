import React, { forwardRef, useContext } from 'react';
import styles from './styles.module.scss';
import { menuItems } from '@/components/header/constants/MenuItems';
import { IMenuProps } from '@/components/header/components/menu';
import { AppContext } from '../../../../pages/_app';
import { menuItemsHeb } from '@/components/header/constants/menuItemsHeb';

const PopupMenu = forwardRef<HTMLDivElement, IMenuProps>(
  (
    {
      benefitsRef,
      aboutMeRef,
      servicesRef,
      scheduleRef,
      reviewsRef,
      footerRef,
    },
    ref,
  ) => {
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
      <div
        className={styles.popupMenu}
        ref={ref}
      >
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
        </div>
      </div>
    );
  },
);

PopupMenu.displayName = 'PopupMenu';

export default PopupMenu;
