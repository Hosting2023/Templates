import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Filter.module.scss';
import FilterBlock from './FilterBlock';
import MainButton from '@/src/ui/Buttons/MainButton/MainButton';
import { useAppDispatch, fetchGetWorkerInfo } from '@hosting2023/redux-lib';
import { IGetWorkerRequest } from '@hosting2023/redux-lib/dist/src/utils/types/interfaces/get-worker.interface';

interface FilterProps {}

const Filter: FC<FilterProps> = () => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const [blockVisible, setBlockVisible] = useState<boolean>(true);
  const [frequency, setFrequency] = useState<string>('');
  const [allergy, setAllergy] = useState<string>('');
  const [cleaningType, setCleaningType] = useState<string>('');
  const [filterParams, setFilterParams] = useState<IGetWorkerRequest>({
    frequency: '',
    allergy: '',
    type: '',
    address: '',
  });

  useEffect(() => {
    dispatch(fetchGetWorkerInfo(filterParams));
  }, [filterParams]);

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
        `${t('filter_item2_4')}`,
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
    <div className={styles.filter_page} id={t('filter_title')}>
      <h2 className={styles.filter_header}>{t('filter_title')}</h2>
      <div className={styles.filter_content}>
        <div className={styles.filter_content_top}>
          {filters.map((item, idx) => (
            <FilterBlock
              name={item.name}
              filterItems={item.filterItems}
              key={idx}
              setBlockVisible={setBlockVisible}
              blockVisible={blockVisible}
              setFrequency={setFrequency}
              setAllergy={setAllergy}
              setCleaningType={setCleaningType}
            />
          ))}
          {/* <div className={styles.filter_block_wrapper}>
            <div className={styles.filter_block_name}>{filters[0].name}</div>
            {filters[0].filterItems.map((item, idx) => (
              <button></button>
            ))}
          </div> */}
        </div>
        <div className={styles.filter_content_bottom}>
          <div
            className={styles.filter_content_adress}
            style={
              i18n.language === 'he'
                ? { marginLeft: '5%' }
                : { marginRight: '5%' }
            }
          >
            {t('filter_adress')}
          </div>
          <input type="text" className={styles.filter_content_input}></input>
        </div>
        <div
          className={styles.filter_content_btn}
          onClick={() => {
            setFilterParams({
              frequency: frequency,
              allergy: allergy,
              type: cleaningType,
              address: 'dsa',
            });
          }}
        >
          <MainButton item={t('filter_btn')} width={'100%'} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
