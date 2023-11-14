import { MonthFormatType } from '@/components/lips/datePickerWithSwiper/interfaces/MonthFormatType';

export const generateSwiperData = (
  language: string,
  monthFormat: MonthFormatType,
  isMobile: boolean,
) => {
  const generateDays = (numDays: number): number[] =>
    Array.from({ length: numDays }, (_, index) => index + 1);

  const generateYears = (startYear: number, endYear: number): number[] =>
    Array.from(
      { length: endYear - startYear + 1 },
      (_, index) => startYear + index,
    );

  const getMonthList = (
    locales: string | string[] = 'en',
    format: MonthFormatType = 'long',
  ): string[] => {
    const year = new Date().getFullYear();
    const monthList: IterableIterator<number> = Array(12).keys();
    format = isMobile ? 'short' : 'long';
    const formatter = new Intl.DateTimeFormat(locales, {
      month: format,
    });
    const getMonthName = (monthIndex: number) =>
      formatter.format(new Date(year, monthIndex));
    return Array.from(monthList, getMonthName);
  };

  const monthNames = getMonthList(language, monthFormat);

  const monthIndexes = monthNames.map((_month, index) => index);

  return {
    monthNames,
    monthIndexes,
    generateDays,
    generateYears,
  };
};
