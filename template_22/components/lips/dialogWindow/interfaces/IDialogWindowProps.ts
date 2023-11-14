import { PropsWithChildren } from 'react';

import { DirectionType } from './DirectionType';
import { SizeType } from './SizeType';

export interface IDialogWindowProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: VoidFunction;
  buttonName?: string;
  buttonClassName?: string;
  startIcon?: string;
  endIcon?: string;
  withoutPadding?: boolean;
  withoutGap?: boolean;
  size?: SizeType;
  direction?: DirectionType;
  modal?: boolean;
  className?: string;
}
