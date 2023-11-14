import React, { FC } from 'react';
import DefaultInput, { IDefaultInputProps } from '../Default';
import { getInputType } from './config';
import passwordStyles from './styles.module.scss';

const PasswordInput: FC<IDefaultInputProps> = ({ ...props }) => {
  const inputType = getInputType(true);
  return (
    <DefaultInput
      type={inputType}
      errorClassName={passwordStyles.error}
      {...props}
    ></DefaultInput>
  );
};

export default PasswordInput;
