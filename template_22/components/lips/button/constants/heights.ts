import { HeightType } from '../interfaces/HeightType';

import styles from '../styles.module.scss';

export const heights: Record<HeightType, string> = {
  small: `${styles.heightsSmall}`,
  regular: `${styles.heightsRegular}`,
  large: `${styles.heightLarge}`,
};
