export interface IClassNameItem {
  className?: string;
  needDisplay?: boolean;
}

export const generateClassName = (classNames: IClassNameItem[]): string => {
  const names = Array.from(
    classNames.filter((obj) => obj.needDisplay),
    (obj) => obj.className,
  );
  return names.join(' ');
};
