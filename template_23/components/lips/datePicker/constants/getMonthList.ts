import { MonthFormatType } from '@/components/lips/datePicker/interfaces/MonthFormatType';

export const getMonthList = (
  locales: string | string[] = 'en',
  format: MonthFormatType = 'long',
): string[] => {
  const year = new Date().getFullYear();
  const monthList: IterableIterator<number> = Array(12).keys();
  const formatter = new Intl.DateTimeFormat(locales, {
    month: format,
  });
  const getMonthName = (monthIndex: number) =>
    formatter.format(new Date(year, monthIndex));
  return Array.from(monthList, getMonthName);
};
