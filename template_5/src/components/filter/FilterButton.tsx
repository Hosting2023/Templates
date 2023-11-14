import { Dispatch, FC, SetStateAction } from 'react';
import cn from 'classnames';

import styles from './Filter.module.scss';

interface FilterButtonProps {
  item: string;
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
}

const FilterButton: FC<FilterButtonProps> = ({
  item,
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <button
      className={cn(
        styles.filter_filterBtn,
        activeFilter === item ? styles.filter_filterBtn_active : '',
      )}
      onClick={() => setActiveFilter(item)}
    >
      <span>{item}</span>
    </button>
  );
};

export default FilterButton;
