import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import { directions } from './constants/Directions';
import { sizes } from './constants/Sizes';
import { DirectionType } from './interfaces/DirectionType';
import { SizeType } from './interfaces/SizeType';

import styles from './styles.module.scss';

interface IGetClassNames {
  modal: boolean;
  withoutPadding: boolean;
  withoutGap: boolean;
  isMobile: boolean;
  size: SizeType;
  direction: DirectionType;
  className?: string;
}

export const getClassNames = ({
  withoutPadding,
  withoutGap,
  isMobile,
  size,
  direction,
  className,
}: IGetClassNames) => {
  const dialogPanelClassNames: IClassNameItem[] = [
    {
      className: styles.withoutPadding,
      needDisplay: withoutPadding,
    },
    {
      className: styles.withoutGap,
      needDisplay: withoutGap,
    },
    {
      className: styles.sheet,
      needDisplay: true,
    },
    {
      className: sizes[size],
      needDisplay: true,
    },
    {
      className: directions[direction],
      needDisplay: true,
    },
    {
      className: className,
      needDisplay: true,
    },
  ];

  const sheetContainerClassNames: IClassNameItem[] = [
    {
      className: styles.panelContainer,
      needDisplay: isMobile,
    },
    {
      className: styles.container,
      needDisplay: !isMobile,
    },
  ];

  return {
    dialogPanelClassNames: generateClassName(dialogPanelClassNames),
    sheetContainerClassNames: generateClassName(sheetContainerClassNames),
  };
};
