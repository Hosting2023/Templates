import { TextAlignType } from '../interfaces/TextAlignType';

import styles from '../styles.module.scss';

export const textAligns: Record<TextAlignType, string> = {
  left: `${styles.textAlign_left}`,
  center: `${styles.textAlign_center}`,
  right: `${styles.textAlign_right}`,
};
