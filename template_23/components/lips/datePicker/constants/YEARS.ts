export const years = Array.from(
  { length: 100 },
  (_el: number, index) => new Date().getFullYear() - index,
);
