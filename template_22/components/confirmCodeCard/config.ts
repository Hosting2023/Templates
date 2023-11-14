import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import styles from './styles.module.scss';
export const getClassNames = (codeClassName?: string) => {
  const inputClassNames: IClassNameItem[] = [
    {
      className: styles.input,
      needDisplay: true,
    },
    {
      className: styles.labelCenter,
      needDisplay: !!codeClassName,
    },
  ];

  return {
    inputClassName: generateClassName(inputClassNames),
  };
};
