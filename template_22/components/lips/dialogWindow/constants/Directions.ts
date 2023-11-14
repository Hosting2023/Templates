import styles from '@/components/lips/dialogWindow/styles.module.scss';

import { DirectionType } from '../interfaces/DirectionType';

export const directions: Record<DirectionType, string> = {
  up: `${styles.up}`,
  down: `${styles.down}`,
};
