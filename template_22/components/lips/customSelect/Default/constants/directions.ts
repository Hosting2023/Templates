import { DirectionType } from '../interfaces/DirectionType';

import styles from '../styles.module.scss';

export const directions: Record<DirectionType, string> = {
  up: `${styles.up}`,
  down: `${styles.down}`,
};
