import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import styles from './styles.module.scss';

interface IGetClassNames {
  focus?: boolean;
  value?: string | null;
  noValueStyle?: boolean;
  className?: string;
}

export const getClassNames = ({
  focus,
  value,
  noValueStyle,
  className,
}: IGetClassNames) => {
  const focusContainerClassNames: IClassNameItem[] = [
    {
      className: styles.container,
      needDisplay: true,
    },
    {
      className: styles.focusContainer,
      needDisplay: !!focus,
    },
    {
      className: styles.withoutFocusContainer,
      needDisplay: !focus,
    },
    {
      className: className,
      needDisplay: true,
    },
  ];
  const labelClassNames: IClassNameItem[] = [
    {
      className: styles.label,
      needDisplay: true,
    },
    {
      className: styles.activeLabel,
      needDisplay: !!focus,
    },
    {
      className: styles.hiddenLabel,
      needDisplay: !focus && !!value,
    },
    {
      className: styles.activeLabel,
      needDisplay: !focus && !!value,
    },
  ];

  const phoneContainerNames: IClassNameItem[] = [
    {
      className: styles.input,
      needDisplay: true,
    },
    {
      className: styles.focus,
      needDisplay: !!focus,
    },
    {
      className: styles.noValueStyle,
      needDisplay: !!noValueStyle,
    },
  ];

  return {
    focusContainerClassName: generateClassName(focusContainerClassNames),
    labelClassName: generateClassName(labelClassNames),
    phoneContainerName: generateClassName(phoneContainerNames),
  };
};
