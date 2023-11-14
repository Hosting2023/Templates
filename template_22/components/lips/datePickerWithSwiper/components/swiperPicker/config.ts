import {
  generateClassName,
  IClassNameItem,
} from '@/utils/helpers/generateClassName';

import styles from './styles.module.scss';

interface IGetClassNamesSwiper {
  index: number;
  data: number[];
  selectedValue: number;
  paddingLeft: boolean;
  paddingRight: boolean;
}

interface IGetClassNamesSwiperSlider {
  isMonth: boolean;
  isYear: boolean;
  isSmall: boolean;
}

export const getClassNamesSwiper = ({
  index,
  data,
  selectedValue,
  paddingLeft,
  paddingRight,
}: IGetClassNamesSwiper) => {
  const selectedIndex = data.indexOf(selectedValue);

  const swiperClassNames: IClassNameItem[] = [
    {
      className: styles.dateItem,
      needDisplay: true,
    },
    {
      className: styles.selected,
      needDisplay: selectedIndex === index,
    },
    {
      className: styles.neighbors,
      needDisplay: selectedIndex === index - 1 || selectedIndex === index + 1,
    },
    {
      className: styles.prevNeighbors,
      needDisplay: selectedIndex === index - 2 || selectedIndex === index + 2,
    },
    {
      className: styles.paddingLeftNeighbor,
      needDisplay:
        paddingLeft &&
        (selectedIndex === index - 1 || selectedIndex === index + 1),
    },
    {
      className: styles.paddingLeft,
      needDisplay: paddingLeft,
    },
    {
      className: styles.paddingRightNeighbor,
      needDisplay:
        paddingRight &&
        (selectedIndex === index - 1 || selectedIndex === index + 1),
    },
    {
      className: styles.paddingRight,
      needDisplay: paddingRight,
    },
  ];

  return generateClassName(swiperClassNames);
};

export const getClassNamesSwiperSlider = ({
  isMonth,
  isYear,
  isSmall,
}: IGetClassNamesSwiperSlider) => {
  const swiperSlideClassNames: IClassNameItem[] = [
    {
      className: styles.months,
      needDisplay: isMonth,
    },
    {
      className: styles.years,
      needDisplay: isYear,
    },
    {
      className: styles.days,
      needDisplay: !(isMonth || isYear),
    },
    {
      className: styles.daysSmall,
      needDisplay: !(isMonth || isYear) && isSmall,
    },
    {
      className: styles.monthsSmall,
      needDisplay: isMonth && isSmall,
    },
    {
      className: styles.yearsSmall,
      needDisplay: isYear && isSmall,
    },
  ];

  return generateClassName(swiperSlideClassNames);
};
