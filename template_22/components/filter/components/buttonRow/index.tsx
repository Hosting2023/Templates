import React from 'react';
import { getClassNames } from '@/components/filter/components/buttonRow/config';
import styles from './styles.module.scss';

interface ButtonElement {
  keyButton: number;
  name: string;
}

interface ButtonsRowProps {
  buttonData: ButtonElement[];
  activeButtonIndex: number | number[] | null;
  handleButtonClick: (index: number) => void;
  isSearch: boolean;
}

const ButtonsRow: React.FC<ButtonsRowProps> = ({
  buttonData,
  activeButtonIndex,
  handleButtonClick,
  isSearch,
}) => {
  const isActive = (index: number) => {
    if (typeof activeButtonIndex === 'number') {
      return activeButtonIndex === index;
    } else if (Array.isArray(activeButtonIndex)) {
      return activeButtonIndex.includes(index);
    }
    return false;
  };

  return (
    <div
      className={
        getClassNames(isSearch, activeButtonIndex, 0).buttonsRowClassName
      }
    >
      {buttonData.map((elem) => (
        <button
          key={elem.keyButton}
          className={`${
            getClassNames(isSearch, activeButtonIndex, elem.keyButton)
              .buttonClassName
          } ${isActive(elem.keyButton) ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick(elem.keyButton)}
        >
          <div className={styles.textButton}>{elem.name}</div>
        </button>
      ))}
    </div>
  );
};

export default ButtonsRow;
