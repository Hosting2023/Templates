import React from 'react';

import Default, { ISelectProps } from './Default';
import WithInput, { ISelectInputProps } from './WithInput';

export type SelectConfigProps = ISelectProps & ISelectInputProps;

export const selectTypesConfig = (props: SelectConfigProps) => ({
  default: <Default {...props} />,
  withInput: <WithInput {...props} />,
});
