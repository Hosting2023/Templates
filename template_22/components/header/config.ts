import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import styles from './styles.module.scss';

interface IGetClassNames {
  headerClassName?: string;
  wrapperClassName?: string;
}

export const getClassNames = ({
  headerClassName,
  wrapperClassName,
}: IGetClassNames) => {
  const headerClassNames: IClassNameItem[] = [
    {
      className: styles.header,
      needDisplay: true,
    },
    {
      className: headerClassName,
      needDisplay: true,
    },
  ];
  const wrapperClassNames: IClassNameItem[] = [
    {
      className: styles.wrapper,
      needDisplay: true,
    },
    {
      className: wrapperClassName,
      needDisplay: true,
    },
  ];
  return {
    headerClassNames: generateClassName(headerClassNames),
    wrapperClassNames: generateClassName(wrapperClassNames),
  };
};
