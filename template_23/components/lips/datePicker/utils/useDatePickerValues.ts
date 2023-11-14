import { useEffect, useState } from 'react';

import { dateFormat } from '@/components/lips/datePicker/constants/dateFormat';
import { getDaysInMonth } from '@/components/lips/datePicker/constants/getDaysInMonth';
import { getMonthList } from '@/components/lips/datePicker/constants/getMonthList';
import { DatePickerType } from '@/components/lips/datePicker/interfaces/DatePickerType';
import { IDatePickerProps } from '@/components/lips/datePicker/interfaces/IDatePickerProps';
import { MonthFormatType } from '@/components/lips/datePicker/interfaces/MonthFormatType';
import styles from '@/components/lips/datePicker/styles.module.scss';

export const useDatePickerValues = ({
  onDone: externalOnDone,
  onClose: externalOnClose,
  type: externalType,
  currentDate,
  language,
}: IDatePickerProps) => {
  const onDone = externalOnDone
    ? externalOnDone
    : () => {
        console.log('here');
      };
  const onClose = externalOnClose
    ? externalOnClose
    : () => {
        console.log('here');
      };
  const type: DatePickerType = externalType ? externalType : 'single';

  const containerClass =
    type === 'single' ? styles.calendarWrapper : styles.datePickerWrapper;

  const [date, setDate] = useState(currentDate);
  const [days, setDays] = useState<number[]>(
    getDaysInMonth(date.getMonth() + 1, date.getFullYear()),
  );

  const monthFormat: MonthFormatType = type === 'single' ? 'long' : 'short';

  const monthsNames = getMonthList(language, monthFormat);
  const currentDay = date.getDate();
  const currentMonth = monthsNames[date.getMonth()] as string;
  const currentYear = date.getFullYear();
  const onDoneClick = () => {
    onDone(dateFormat(date));
    onClose();
  };
  const onCloseClick = () => {
    onClose();
  };
  const onDayChange = (day: number | string) => {
    setDate(new Date(currentYear, date.getMonth(), day as number));
  };
  const onMonthChange = (month: number | string) => {
    setDate(
      new Date(currentYear, monthsNames.indexOf(month as string), currentDay),
    );
  };
  const onYearChange = (year: number | string) => {
    setDate(new Date(year as number, date.getMonth(), currentDay));
  };

  useEffect(() => {
    onDone(dateFormat(date));
  }, [date]);

  useEffect(() => {
    setDays(getDaysInMonth(date.getMonth() + 1, currentYear));
  }, [currentMonth, currentYear, date]);

  return {
    date,
    setDate,
    days,
    setDays,
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
  };
};
