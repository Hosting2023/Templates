import { TextColorType } from '@/components/lips/text/interfaces/TextColorType';

import styles from '../styles.module.scss';

export const textColor: Record<TextColorType, string> = {
  white: `${styles.textColor_white}`,
  black: `${styles.textColor_black}`,
  gray_dark: `${styles.textColor_gray_dark}`,
  gray_light: `${styles.textColor_gray_light}`,
  blue_dark: `${styles.textColor_blue_dark}`,
  pink_dark: `${styles.textColor_pink_dark}`,
  pink_light: `${styles.textColor_pink_light}`,
  green: `${styles.textColor_green}`,
};
