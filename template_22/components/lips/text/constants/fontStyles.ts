import { FontStyleType } from '@/components/lips/text/interfaces/FontStyleType';

import styles from '../styles.module.scss';

export const fontStyles: Record<FontStyleType, string> = {
  italic: `${styles.fontStyleItalic}`,
  normal: `${styles.fontStyleNormal}`,
};
