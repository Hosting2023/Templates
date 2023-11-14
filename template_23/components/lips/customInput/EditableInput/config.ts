import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import styles from './styles.module.scss';

export const getClassNames = (editMode: boolean) => {
  const containerClassNames: IClassNameItem[] = [
    {
      className: styles.container,
      needDisplay: true,
    },
    {
      className: styles.focusContainer,
      needDisplay: editMode,
    },
    {
      className: styles.withoutFocusContainer,
      needDisplay: !editMode,
    },
  ];
  const arrowWrapperClassNames: IClassNameItem[] = [
    {
      className: styles.arrowWrapper,
      needDisplay: true,
    },
    {
      className: styles.arrowPosition,
      needDisplay: editMode,
    },
  ];

  const imageClassNames: IClassNameItem[] = [
    {
      className: styles.arrow,
      needDisplay: editMode,
    },
  ];

  const errorClassNames: IClassNameItem[] = [
    {
      className: styles.error,
      needDisplay: true,
    },
    {
      className: styles.errorPosition,
      needDisplay: editMode,
    },
  ];

  return {
    containerClassName: generateClassName(containerClassNames),
    arrowWrapperClassName: generateClassName(arrowWrapperClassNames),
    imageClassName: generateClassName(imageClassNames),
    errorClassName: generateClassName(errorClassNames),
  };
};
