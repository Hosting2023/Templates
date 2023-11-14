import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import styles from './styles.module.scss';
interface IGetCardClassNames {
  error?: boolean;
}

export const getCardClassNames = ({ error }: IGetCardClassNames) => {
  const cardClassNames: IClassNameItem[] = [
    {
      className: styles.cardContainer,
      needDisplay: true,
    },
    {
      className: styles.labelError,
      needDisplay: error,
    },
  ];

  return {
    cardClassName: generateClassName(cardClassNames),
  };
};
