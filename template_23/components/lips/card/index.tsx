import type { ReactNode } from 'react';
import React from 'react';
import cnBind from 'classnames/bind';
import type { NextPage } from 'next';

import styles from './styles.module.scss';

interface ICardProps {
  children: ReactNode;
  shadow?: boolean;
  className?: string;
}

const Card: NextPage<ICardProps> = ({
  children,
  shadow = false,
  className,
}) => {
  const cx = cnBind.bind(styles);
  const cardClassnames = cx('card', 'borderMain', className, {
    borderShadow: shadow,
  });

  return <div className={cardClassnames}>{children}</div>;
};

export default Card;
