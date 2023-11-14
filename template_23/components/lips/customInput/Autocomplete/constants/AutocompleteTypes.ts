import { AutocompleteType } from '../interfaces/AutocompleteType';

import styles from '../styles.module.scss';

export const autocompleteTypes: Record<AutocompleteType, string> = {
  border: `${styles.border}`,
  borderLess: `${styles.borderLess}`,
};
