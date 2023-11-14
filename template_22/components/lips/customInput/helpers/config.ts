import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import styles from '../styles.module.scss';

interface IGetClassNames {
  error?: string;
  text?: string | null;
  noHeading?: boolean;
  noBackground?: boolean;
  noBorderBottom?: boolean;
  borderBottomLabel?: boolean;
  touched?: boolean;
  label?: string;
}

export const getClassNames = ({
  error,
  noBorderBottom = false,
  touched = false,
}: IGetClassNames) => {
  const labelTextClassNames: IClassNameItem[] = [];
  const containerClassNames: IClassNameItem[] = [
    {
      className: styles.container,
      needDisplay: true,
    },
    {
      className: styles.containerError,
      needDisplay: touched && !!error,
    },
    {
      className: styles.boxShadow,
      needDisplay: !noBorderBottom,
    },
  ];

  return {
    labelTextClassName: generateClassName(labelTextClassNames),
    containerClassName: generateClassName(containerClassNames),
  };
};
