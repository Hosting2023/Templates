import { FontWeightType } from '@/components/lips/text/interfaces/FontWeightType';

import styles from '../styles.module.scss';

export const fontWeight: Record<FontWeightType, string> = {
  normal: `${styles.fontWeightNormal}`,
  bold: `${styles.fontWeightBold}`,
};
