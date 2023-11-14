import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import styles from './styles.module.scss';
import { IActiveButton } from '@/components/schedule/index';

export const getClassNames = (
  activeButtons: IActiveButton[],
  selectedButton: IActiveButton,
) => {
  const isActiveButton = activeButtons.some((button) => {
    return (
      button.day === selectedButton.day && button.time === selectedButton.time
    );
  });

  const buttonClassNames: IClassNameItem[] = [
    {
      className: styles.timeButton,
      needDisplay: true,
    },
    {
      className: styles.active,
      needDisplay: isActiveButton,
    },
  ];

  return {
    buttonClassName: generateClassName(buttonClassNames),
  };
};
