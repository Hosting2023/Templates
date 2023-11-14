import { SizeType } from '../interfaces/SizeType';

import styles from '../styles.module.scss';

export const sizes: Record<SizeType, string> = {
  fixed: `${styles.sizesFixed}`,
  fill: `${styles.sizesFill}`,
};
