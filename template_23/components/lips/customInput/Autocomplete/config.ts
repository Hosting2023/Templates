import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import { autocompleteTypes } from './constants/AutocompleteTypes';
import { AutocompleteType } from './interfaces/AutocompleteType';

import styles from './styles.module.scss';

interface IGetClassNames {
  active?: boolean;
  type?: AutocompleteType;
}

export const getClassNames = ({ active, type }: IGetClassNames) => {
  const comboBoxOptionClassNames: IClassNameItem[] = [
    {
      className: styles.option,
      needDisplay: true,
    },
    {
      className: styles.cursor,
      needDisplay: true,
    },
    {
      className: styles.active,
      needDisplay: !!active,
    },
  ];

  const comboBoxInputClassNames: IClassNameItem[] = [
    {
      className: styles.input,
      needDisplay: true,
    },
    {
      className: autocompleteTypes[type!],
      needDisplay: true,
    },
  ];

  return {
    comboBoxOptionClassName: generateClassName(comboBoxOptionClassNames),
    comboBoxInputClassName: generateClassName(comboBoxInputClassNames),
  };
};
