import React from 'react';

import Default, { IDefaultInputProps } from './Default';
import EditableInput, { IEditableInputProps } from './EditableInput';
import Mask, { MaskInputProps } from './Mask';
import Password from './Password';

export type InputConfigProps = IDefaultInputProps &
  MaskInputProps &
  IEditableInputProps;

export const inputTypesConfig = (props: InputConfigProps) => ({
  default: <Default {...props} />,
  password: <Password {...props} />,
  mask: <Mask {...props} />,
  editable: <EditableInput {...props} />,
});
