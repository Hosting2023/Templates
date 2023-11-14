import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import styles from './styles.module.scss';

export const getClassNames = (
  isSearch: boolean,
  activeButtonIndex: number | number[] | null,
  buttonIndex: number,
) => {
  const activeIndexArray = Array.isArray(activeButtonIndex)
    ? activeButtonIndex
    : [activeButtonIndex];

  const buttonClassNames: IClassNameItem[] = [
    {
      className: styles.button,
      needDisplay: true,
    },
    {
      className: styles.limitedWidthButton,
      needDisplay: true,
    },
    {
      className: styles.active,
      needDisplay: activeIndexArray.includes(buttonIndex),
    },
  ];

  const buttonsRowClassNames: IClassNameItem[] = [
    {
      className: styles.buttonRow,
      needDisplay: true,
    },
    {
      className: styles.redButtonRow,
      needDisplay:
        isSearch &&
        (activeButtonIndex == null || activeIndexArray.length === 0),
    },
  ];

  return {
    buttonClassName: generateClassName(buttonClassNames),
    buttonsRowClassName: generateClassName(buttonsRowClassNames),
  };
};
