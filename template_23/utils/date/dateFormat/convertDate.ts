export const convertDate = (date: Date) =>
  `${date.getDate()} ${date.toLocaleString('en', {
    month: 'long',
  })} ${date.getFullYear()}`;

export const convertShortDate = (date: Date) => {
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear().toString().slice(2);
  return `${day}.${month}.${year}`;
};
