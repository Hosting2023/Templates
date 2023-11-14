import { TextTransformType } from '../interfaces/TextTransformType';

import styles from '../styles.module.scss';

export const textTransforms: Record<TextTransformType, string> = {
  uppercase: `${styles.textTransform_uppercase}`,
  lowercase: `${styles.textTransform_lowercase}`,
  capitalize: `${styles.textTransform_capitalize}`,
  normal: `${styles.textTransform_normal}`,
};
