import React, { FC, useCallback, useState } from 'react';

// import eye from '@/assets/icons/eye.svg';

// import Button from '../../button';
import DefaultInput, { IDefaultInputProps } from '../Default';

import { getInputType } from './config';

import passwordStyles from './styles.module.scss';

const PasswordInput: FC<IDefaultInputProps> = ({ ...props }) => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const inputType = getInputType(isChecked);

  const handleChange = useCallback(() => {
    setIsChecked((prev) => !prev);
  }, []);

  return (
    <DefaultInput
      type={inputType}
      errorClassName={passwordStyles.error}
      {...props}
    >
      <div className={passwordStyles.container}>
        <input
          type="checkbox"
          className={passwordStyles.toggle}
          checked={isChecked}
          onChange={handleChange}
        />
        <span className={passwordStyles.line} />
        <button
          className={passwordStyles.passwordButton}
        />
      </div>
    </DefaultInput>
  );
};

export default PasswordInput;
