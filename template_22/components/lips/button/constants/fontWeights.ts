import { FontWeightType } from '../interfaces/FontWeightType';

import styles from '../styles.module.scss';

export const fontWeights: Record<FontWeightType, string> = {
  normal: `${styles.fontWeightNormal}`,
  bold: `${styles.fontWeightBold}`,
};
