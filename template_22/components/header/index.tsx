import type { FC } from 'react';
import React from 'react';
import Menu, { IMenuProps } from './components/menu';
import MaidList, {
  IMaidListProps,
} from '@/components/header/components/maidList';

interface IHeaderProps extends IMaidListProps, IMenuProps {}

const Header: FC<IHeaderProps> = ({ ...props }) => (
  <div>
    <Menu {...props} />
    <MaidList {...props} />
  </div>
);

export default Header;
