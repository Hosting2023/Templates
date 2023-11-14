import React from 'react';
import styles from './FiterlOption.module.scss';

interface Option {
   id: number;
   title: string;
}

interface FilterOptionProps {
   value: number | null;
   options: Option[];
   handleChange: (selectedId: number) => void;
   title: string;
}

const FilterOption: React.FC<FilterOptionProps> = ({ value, options, handleChange, title }) => (
   <div className={styles.filter_content_block}>
      <div className={styles.title_block}>{title}</div>
      {options.map((option) => (
         <div
            key={option.id}
            className={`${styles.option} ${value === option.id ? styles.active : ''}`}
            onClick={() => handleChange(option.id)}
         >
            {option.title}
         </div>
      ))}
   </div>
);

export default FilterOption;
