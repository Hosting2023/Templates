import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import styles from '../styles.module.scss';

interface IGetTextAreaClassNames {
  error?: string;
  arrowToggled?: boolean;
}

export const getTextAreaClassNames = ({
  error,
  arrowToggled,
}: IGetTextAreaClassNames) => {
  const containerClassNames: IClassNameItem[] = [
    {
      className: styles.container,
      needDisplay: true,
    },
    {
      className: styles.errorContainer,
      needDisplay: !!error,
    },
  ];

  const arrowClassNames: IClassNameItem[] = [
    {
      className: styles.arrow,
      needDisplay: true,
    },
    {
      className: styles.arrowRotated,
      needDisplay: !!arrowToggled,
    },
  ];

  return {
    containerClassName: generateClassName(containerClassNames),
    arrowClassName: generateClassName(arrowClassNames),
  };
};
