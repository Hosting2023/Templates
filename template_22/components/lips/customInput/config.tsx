import React from 'react';

import Default, { IDefaultInputProps } from './Default';
import Mask, { MaskInputProps } from './Mask';
import Password from './Password';

export type InputConfigProps = IDefaultInputProps & MaskInputProps;

export const inputTypesConfig = (props: InputConfigProps) => ({
  default: <Default {...props} />,
  password: <Password {...props} />,
  mask: <Mask {...props} />,
});
