import React, { FC } from 'react';
import type { Props } from 'react-input-mask';
import InputMask from 'react-input-mask';

import withWrapper from '../helpers/hocs/withWrapper';

type MaskInputType = {
  mask?: string;
};

export type MaskInputProps = MaskInputType & Omit<Props, 'mask'>;

const MaskInput: FC<MaskInputProps> = ({ mask = '', ...props }) => (
  <InputMask
    mask={mask}
    {...props}
  />
);

export default withWrapper(MaskInput);
