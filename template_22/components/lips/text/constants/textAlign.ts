import { TextAlignType } from '@/components/lips/text/interfaces/TextAlignType';

import styles from '../styles.module.scss';

export const textAlign: Record<TextAlignType, string> = {
  left: `${styles.textAlign_left}`,
  center: `${styles.textAlign_center}`,
  right: `${styles.textAlign_right}`,
};
