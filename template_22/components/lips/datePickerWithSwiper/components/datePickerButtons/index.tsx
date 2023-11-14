import React from 'react';
import { FC } from 'react';
import cn from 'classnames';

import Button from '@/components/lips/button';

import { DatePickerText } from '../constants/DatePickerText';

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
    <Button
      radius="large"
      className={styles.button}
      onClick={onCloseClick}
    >
      {DatePickerText.Cancel}
    </Button>
    <Button
      radius="large"
      className={cn(styles.button, styles.textColor)}
      onClick={onDoneClick}
    >
      {DatePickerText.Done}
    </Button>
  </div>
);

export default DatePickerButtons;
