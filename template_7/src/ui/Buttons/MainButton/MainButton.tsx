import React, { FC } from 'react';
import styles from './MainButton.module.scss';

type MainButtonProps = {
  item: string;
  width: string;
  isActive?: boolean;
  isBold?: boolean;
};

const MainButton: FC<MainButtonProps> = ({ item, width, isActive, isBold }) => {
  return (
    <button
      className={isActive ? styles.wrapper_active : styles.wrapper}
      style={
        isBold
          ? { fontWeight: '700', width: width }
          : { fontWeight: '400', width: width }
      }
    >
      {item}
    </button>
  );
};

export default MainButton;
