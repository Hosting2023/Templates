import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Filter.module.scss';
import FilterBlock from './FilterBlock';

const Filter: FC = () => {
  const { t, i18n } = useTranslation();

  const filters = [
    {
      name: `${t('filter_name1')}`,
      filterItems: [
        `${t('filter_item1_1')}`,
        `${t('filter_item1_2')}`,
        `${t('filter_item1_3')}`,
      ],
    },
    {
      name: `${t('filter_name2')}`,
      filterItems: [
        `${t('filter_item2_1')}`,
        `${t('filter_item2_2')}`,
        `${t('filter_item2_3')}`,
      ],
    },
    {
      name: `${t('filter_name3')}`,
      filterItems: [
        `${t('filter_item3_1')}`,
        `${t('filter_item3_2')}`,
        `${t('filter_item3_3')}`,
        `${t('filter_item3_4')}`,
      ],
    },
  ];

  return (
    <div className={styles.filter_wrapper}>
      <div className={styles.filter_header_wrapper}>
        <h1 className={styles.filter_heading}>{t('filter_title')}</h1>
      </div>
      {filters.map((item, index) => (
        <FilterBlock
          name={item.name}
          filterItems={item.filterItems}
          key={index}
        />
      ))}
      <div className={styles.filter_inputsBlock}>
        <input
          type="text"
          placeholder={t('filter_adress')}
          className={styles.filter_inputsBlock_adress}
        />
        <input
          type="text"
          placeholder={t('filter_no')}
          className={styles.filter_inputsBlock_number}
          style={
            i18n.language === 'he'
              ? { marginRight: '7%' }
              : { marginLeft: '7%' }
          }
        />
      </div>
      <div className={styles.filter_search_wrapper}>
        <button className={styles.filter_search_btn}>{t('filter_btn')}</button>
      </div>
    </div>
  );
};

export default Filter;
