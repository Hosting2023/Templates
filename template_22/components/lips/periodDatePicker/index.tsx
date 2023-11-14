import React from 'react';
import { FC } from 'react';
import cn from 'classnames';

import Calendar from '@/assets/icons/calendar.svg?inline';
import { Text } from '@/components/lips';
import { DatePickerWithSwiper } from '@/components/lips';

import { PeriodDateText } from './constants/PeriodDateText';

import styles from './styles.module.scss';

interface IPeriodDatePickerProps {
  startDate: Date;
  endDate: Date;
  onStartDateChange: React.Dispatch<React.SetStateAction<Date>>;
  onEndDateChange: React.Dispatch<React.SetStateAction<Date>>;
  className?: string;
}

const PeriodDatePicker: FC<IPeriodDatePickerProps> = ({
  endDate,
  startDate,
  onStartDateChange,
  onEndDateChange,
  className = '',
}) => (
  <div className={cn(styles.wrapper, className)}>
    <div className={styles.caption}>
      <Text className={styles.text}>{PeriodDateText.From}</Text>
      <div className={styles.calendarWrapper}>
        <Calendar
          alt="calendar"
          className={styles.calendar}
        />
      </div>
      <Text className={styles.text}>{PeriodDateText.To}</Text>
    </div>
    <div className={styles.pickersWrapper}>
      <DatePickerWithSwiper
        type="interval"
        currentDate={startDate}
        onDateChange={onStartDateChange}
      />
      <DatePickerWithSwiper
        type="interval"
        currentDate={endDate}
        onDateChange={onEndDateChange}
      />
    </div>
  </div>
);

export default PeriodDatePicker;
