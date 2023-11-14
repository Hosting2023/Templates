import type { CSSProperties, FC, PropsWithChildren } from 'react';
import React from 'react';
import cn from 'classnames';

import { fontStyles } from '../button/constants/fontStyles';

import { fontSize } from './constants/fontSize';
import { fontWeight } from './constants/fontWeight';
import { textAlign } from './constants/textAlign';
import { textColor } from './constants/textColor';
import { textTransform } from './constants/textTransform';
import { FontSizeType } from './interfaces/FontSizeType';
import { FontStyleType } from './interfaces/FontStyleType';
import { FontWeightType } from './interfaces/FontWeightType';
import { TextAlignType } from './interfaces/TextAlignType';
import { TextColorType } from './interfaces/TextColorType';
import { TextTransformType } from './interfaces/TextTransformType';

import styles from './styles.module.scss';

interface ITextProps extends PropsWithChildren {
  disabled?: boolean;
  fontStyle?: FontStyleType;
  weight?: FontWeightType;
  size?: FontSizeType;
  color?: TextColorType;
  align?: TextAlignType;
  transform?: TextTransformType;
  className?: string;
  style?: CSSProperties;
}

const Text: FC<ITextProps> = ({
  className,
  fontStyle = 'normal',
  weight = 'normal',
  size = 'base',
  color = 'gray_dark',
  align = 'center',
  transform = 'normal',
  disabled = false,
  children,
  style,
}) => (
  <p
    style={style}
    className={cn(
      styles.text,
      fontStyles[fontStyle],
      fontWeight[weight],
      fontSize[size],
      textColor[color],
      textAlign[align],
      textTransform[transform],
      disabled && styles.disabled,
      className,
    )}
  >
    {children}
  </p>
);

export default Text;
