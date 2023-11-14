import React, { Dispatch, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Filter.module.scss';
import MainButton from '@/src/ui/Buttons/MainButton/MainButton';

interface FilterBlockProps {
  name: string;
  filterItems: string[];
  setBlockVisible: Dispatch<React.SetStateAction<boolean>>;
  blockVisible: boolean;
  setAllergy: Dispatch<React.SetStateAction<string>>;
  setFrequency: Dispatch<React.SetStateAction<string>>;
  setCleaningType: Dispatch<React.SetStateAction<string>>;
}

const FilterBlock: FC<FilterBlockProps> = ({
  name,
  filterItems,
  setBlockVisible,
  blockVisible,
  setAllergy,
  setFrequency,
  setCleaningType,
}) => {
  const { t } = useTranslation();
  const [btnActive, setBtnActive] = useState<number>(0);

  return !blockVisible && name == t('filter_name3') ? (
    <div className={styles.filter_block_wrapper}></div>
  ) : (
    <div className={styles.filter_block_wrapper}>
      <div className={styles.filter_block_name}>{name}</div>
      {filterItems.map((item, idx) => (
        <div
          className={styles.filter_block_btn}
          key={idx}
          onClick={() => {
            setBtnActive(idx);
            item === t('filter_item1_2') || item === t('filter_item1_3')
              ? setBlockVisible(false)
              : item === t('filter_item1_1')
              ? setBlockVisible(true)
              : '';
            name === t('filter_name1')
              ? setFrequency(item)
              : name === t('filter_name2')
              ? setAllergy(item)
              : name === t('filter_name3')
              ? setCleaningType(item)
              : '';
          }}
        >
          <MainButton
            item={item}
            width={'90%'}
            isActive={btnActive === idx ? true : false}
          />
        </div>
      ))}
    </div>
  );
};

export default FilterBlock;
