import { FontSizeType } from '@/components/lips/text/interfaces/FontSizeType';

import styles from '../styles.module.scss';

export const fontSize: Record<FontSizeType, string> = {
  xxs: `${styles.fontSize_xxs}`,
  xs: `${styles.fontSize_xs}`,
  sm: `${styles.fontSize_sm}`,
  base: `${styles.fontSize_base}`,
  lg: `${styles.fontSize_lg}`,
  xl: `${styles.fontSize_xl}`,
};
