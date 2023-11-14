export const dateFormat = (time: Date) => {
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const monthResult = month < 10 ? `0${month}` : month;
  const dayResult = day < 10 ? `0${day}` : day;
  return `${year}-${monthResult}-${dayResult}`;
};
