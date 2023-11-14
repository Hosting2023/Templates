import styles from '@/components/lips/dialogWindow/styles.module.scss';

import { SizeType } from '../interfaces/SizeType';

export const sizes: Record<SizeType, string> = {
  normal: `${styles.normal}`,
  large: `${styles.large}`,
};
