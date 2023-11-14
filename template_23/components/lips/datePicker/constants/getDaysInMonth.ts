export const getDaysInMonth = (month: number, year: number): number[] => {
  const daysAmount = new Date(year, month, 0).getDate();
  return Array.from(
    { length: daysAmount },
    (_el: number, index: number) => index + 1,
  );
};
