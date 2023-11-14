import React, { FC, useState } from "react";
// import { useTranslation } from 'react-i18next';

import styles from "./Filter.module.scss";

interface FilterBlockProps {
  name: string;
  filterItems: string[];
}

const FilterBlock: FC<FilterBlockProps> = ({ name, filterItems }) => {
  // const { t } = useTranslation();

  const [activeFilter, setActiveFilter] = useState<string>(filterItems[0] || "");

  return (
    <div className={styles.filter_block_wrapper}>
      <span className={styles.filter_block_name}>{name}</span>
      <div
        className={
          name === "Type of cleaning"
            ? styles.filter_block_btn_wrapper_clean
            : styles.filter_block_btn_wrapper
        }
      >
        {filterItems.map((item, idx) => (
          <button
            className={
              activeFilter === item ? styles.filter_block_btn_active : styles.filter_block_btn
            }
            key={idx}
            onClick={() => {
              setActiveFilter(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBlock;
