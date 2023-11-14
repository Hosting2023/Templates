import { useRef, useState } from 'react';
import SwiperCore from 'swiper';

export const useSwiperPicker = (
  currentDate: Date,
  onClose: ((ref?: HTMLElement | undefined) => void) | undefined,
) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [selectedDay, setSelectedDay] = useState<number>(currentDate.getDate());
  const [selectedMonth, setSelectedMonth] = useState<number>(
    currentDate.getMonth() + 1,
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    currentDate.getFullYear(),
  );

  const daysSwiperRef = useRef<SwiperCore | null>(null);
  const monthsSwiperRef = useRef<SwiperCore | null>(null);
  const yearsSwiperRef = useRef<SwiperCore | null>(null);

  const handleDayChange = (day: number) => setSelectedDay(day);
  const handleMonthChange = (month: number) => setSelectedMonth(month);
  const handleYearChange = (year: number) => setSelectedYear(year);

  const handleDateChange = () => {
    const newDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
    setSelectedDate(newDate);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return {
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
  };
};
