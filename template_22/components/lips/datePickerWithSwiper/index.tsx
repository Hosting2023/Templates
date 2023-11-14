import React, { useEffect } from 'react';
import cn from 'classnames';
import SwiperCore, { Navigation } from 'swiper';

import { useResizeWindow } from '@/hooks/useResizeWindow';

import { datePickerCountDays } from './components/constants/datePickerCountDays';
import { datePickerStartYear } from './components/constants/datePickerStartYear';
import DatePickerButtons from './components/datePickerButtons';
import { useSwiperPicker } from './components/helpers/useSwiperPicker';
import SwiperPicker from './components/swiperPicker';
import { generateSwiperData } from './components/swiperPicker/helpers/generateSwiperData';
import { DatePickerType } from './interfaces/DatePickerType';
import { MonthFormatType } from './interfaces/MonthFormatType';

import 'swiper/swiper.min.css';
import styles from './styles.module.scss';

SwiperCore.use([Navigation]);

interface DatepickerProps {
  currentDate: Date;
  type?: DatePickerType;
  language?: string;
  monthFormat?: MonthFormatType;
  onDateChange: (selectedDate: Date) => void;
  onClose?: (ref?: HTMLElement) => void;
}

const DatePickerWithSwiper: React.FC<DatepickerProps> = ({
  currentDate,
  type = 'single',
  language = 'en',
  monthFormat = 'short',
  onDateChange,
  onClose,
}) => {
  const { isMobile } = useResizeWindow();
  const { monthNames, monthIndexes, generateDays, generateYears } =
    generateSwiperData(language, monthFormat, isMobile);

  const {
    daysSwiperRef,
    monthsSwiperRef,
    yearsSwiperRef,
    selectedDay,
    selectedMonth,
    selectedYear,
    selectedDate,
    handleDayChange,
    handleMonthChange,
    handleYearChange,
    handleDateChange,
    handleClose,
  } = useSwiperPicker(currentDate, onClose);

  useEffect(() => {
    if (type !== 'single') {
      handleDateChange();
    }

    if (selectedDate) {
      onDateChange(selectedDate);
      if (onClose) {
        onClose();
      }
    }
  }, [selectedDate, selectedDay, selectedMonth, selectedYear]);

  return (
    <div
      className={cn(
        type === 'single' ? styles.calendarWrapper : styles.datePickerWrapper,
      )}
    >
      <div className={styles.datePickerHeader}>
        {`${selectedDay} ${monthNames[selectedMonth - 1]} ${selectedYear}`}
      </div>
      <div className={styles.datePickerContainer}>
        <SwiperPicker
          isSmall={type !== 'single'}
          slides={generateDays(datePickerCountDays)}
          currentValue={selectedDay}
          swiperRef={daysSwiperRef}
          paddingLeft
          handleChange={handleDayChange}
        />
        <SwiperPicker
          isSmall={type !== 'single'}
          isMonth
          slides={monthNames}
          monthIndexes={monthIndexes}
          currentValue={selectedMonth}
          swiperRef={monthsSwiperRef}
          handleChange={handleMonthChange}
        />
        <SwiperPicker
          isSmall={type !== 'single'}
          isYear
          slides={generateYears(
            datePickerStartYear,
            new Date().getFullYear() + 5,
          )}
          currentValue={selectedYear}
          swiperRef={yearsSwiperRef}
          paddingRight
          handleChange={handleYearChange}
        />
      </div>
      {type === 'single' && (
        <DatePickerButtons
          onDoneClick={handleDateChange}
          onCloseClick={handleClose}
        />
      )}
    </div>
  );
};

export default DatePickerWithSwiper;
