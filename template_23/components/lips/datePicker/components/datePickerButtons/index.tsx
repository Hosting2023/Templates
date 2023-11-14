import React from 'react';
import { FC } from 'react';
import cn from 'classnames';

import { DatePickerText } from '@/components/lips/datePicker/constants/DatePickerText';

import styles from './styles.module.scss';

interface IDatePickerButtonsProps {
  onDoneClick: VoidFunction;
  onCloseClick: VoidFunction;
}

const DatePickerButtons: FC<IDatePickerButtonsProps> = ({
  onDoneClick,
  onCloseClick,
}) => (
  <div className={styles.buttonWrapper}>
    <button
      // palette="secondary"
      // radius="large"
      className={styles.button}
      onClick={onCloseClick}
    >
      {DatePickerText.Cancel}
    </button>
    <button
      // palette="secondary"
      // radius="large"
      className={cn(styles.button, styles.textColor)}
      onClick={onDoneClick}
    >
      {DatePickerText.Done}
    </button>
  </div>
);

export default DatePickerButtons;
