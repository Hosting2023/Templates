import { TextColorType } from '../interfaces/TextColorType';

import styles from '../styles.module.scss';

export const textColors: Record<TextColorType, string> = {
  white: `${styles.textColor_white}`,
  black: `${styles.textColor_black}`,
  gray_dark: `${styles.textColor_gray_dark}`,
  blue_dark: `${styles.textColor_blue_dark}`,
  pink_dark: `${styles.textColor_pink_dark}`,
};
