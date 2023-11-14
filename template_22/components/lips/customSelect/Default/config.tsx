import { directions } from '@/components/lips/customSelect/Default/constants/directions';
import { DirectionType } from '@/components/lips/customSelect/Default/interfaces/DirectionType';
import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import styles from './styles.module.scss';

interface IGetClassNames {
  lastId?: boolean;
  select?: boolean;
  direction?: DirectionType;
}

export const getClassNames = ({
  lastId,
  select,
  direction,
}: IGetClassNames) => {
  const listBoxClassNames: IClassNameItem[] = [
    {
      className: styles.selectOptions,
      needDisplay: true,
    },
    {
      className: styles.noBorder,
      needDisplay: !!lastId,
    },
  ];
  const textClassNames: IClassNameItem[] = [
    {
      className: styles.active,
      needDisplay: !!select,
    },
  ];

  const listBoxOptionsClassNames: IClassNameItem[] = [
    {
      className: styles.selectWrapper,
      needDisplay: true,
    },
    {
      className: directions[direction as keyof typeof directions],
      needDisplay: true,
    },
  ];

  return {
    listBoxClassName: generateClassName(listBoxClassNames),
    textClassName: generateClassName(textClassNames),
    listBoxOptionsClassName: generateClassName(listBoxOptionsClassNames),
  };
};
