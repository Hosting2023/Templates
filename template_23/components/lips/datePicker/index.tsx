import type { FC } from 'react';
import React from 'react';

import { IDatePickerProps } from '@/components/lips/datePicker/interfaces/IDatePickerProps';
import { useDatePickerValues } from '@/components/lips/datePicker/utils/useDatePickerValues';

import DatePickerButtons from './components/datePickerButtons';
import SwiperPicker from './components/swiperPicker';
import { years } from './constants/YEARS';

import styles from './styles.module.scss';

const DatePicker: FC<IDatePickerProps> = (props) => {
  const {
    days,
    onDoneClick,
    onCloseClick,
    onDayChange,
    onMonthChange,
    onYearChange,
    currentDay,
    currentMonth,
    currentYear,
    monthsNames,
    containerClass,
    type,
  } = useDatePickerValues(props);

  return (
    <div className={containerClass}>
      <div
        className={styles.caption}
      >{`${currentDay} ${currentMonth} ${currentYear}`}</div>
      <div className={styles.dateSelector}>
        <SwiperPicker
          onChange={onDayChange}
          data={days}
          current={currentDay}
          paddingLeft
        />
        <SwiperPicker
          onChange={onMonthChange}
          data={monthsNames}
          current={currentMonth}
        />
        <SwiperPicker
          onChange={onYearChange}
          data={years}
          current={currentYear}
          paddingRight
        />
      </div>
      {type === 'single' && (
        <DatePickerButtons
          onDoneClick={onDoneClick}
          onCloseClick={onCloseClick}
        />
      )}
    </div>
  );
};

export default DatePicker;
