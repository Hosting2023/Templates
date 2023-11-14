import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './NavBar.module.scss';

const NavBar: FC = () => {
  const { t, i18n } = useTranslation();

  const listItems = [
    `${t('nav_services')}`,
    `${t('nav_reviews')}`,
    `${t('nav_faq')}`,
    `${t('nav_filter')}`,
    `${t('nav_tips')}`,
    `${t('nav_contacts')}`,
  ];

  return (
    <div
      className={styles.nav_wrapper}
      style={
        i18n.language === 'he' ? { marginRight: '15px' } : { marginRight: 0 }
      }
    >
      <div className={styles.nav_wrapper_line}></div>
      <ul
        className={styles.nav_wrapper_list}
        style={
          i18n.language === 'he'
            ? { paddingRight: '10%' }
            : { paddingLeft: '10%' }
        }
      >
        {listItems.map((item, index) => (
          <li
            key={index}
            className={cn(
              styles.nav_wrapper_list_item,
              index === 3 ? styles.nav_wrapper_list_item_active : '',
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
