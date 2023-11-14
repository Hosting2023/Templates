import { RadiusType } from '../interfaces/RadiusType';

import styles from '../styles.module.scss';

export const rounding: Record<RadiusType, string> = {
  regular: `${styles.roundingRegular}`,
  large: `${styles.roundingLarge}`,
};
