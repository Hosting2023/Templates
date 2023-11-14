import type { FC, FocusEvent } from 'react';
import React from 'react';
import { useState } from 'react';
import type { PhoneInputProps } from 'react-phone-input-2';
import PhoneInput from 'react-phone-input-2';

import { getClassNames } from './config';

import styles from './styles.module.scss';

export interface ISelectInputProps extends PhoneInputProps {
  isRequired?: boolean;
  touched?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}

const SelectInput: FC<ISelectInputProps> = ({
  touched,
  placeholder,
  className,
  error,
  value,
  isRequired = false,
  onBlur = () => {
    console.log('here');
  },
  onFocus = () => {
    console.log('here');
  },
  onChange,
  ...props
}): JSX.Element => {
  const [focus, setFocus] = useState(false);

  const label = placeholder && `${placeholder} ${isRequired ? '*' : ''}`;
  const errorStyle = error && touched && !focus;
  const noValueStyle = !value && !touched;

  const { focusContainerClassName, labelClassName, phoneContainerName } =
    getClassNames({
      focus,
      value,
      noValueStyle,
      className,
    });

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    onBlur?.(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    onFocus?.(e);
  };

  return (
    <div className={focusContainerClassName}>
      <span className={labelClassName}>{label}</span>
      <PhoneInput
        value={value}
        onChange={onChange}
        onFocus={handleFocus.bind(this)}
        onBlur={handleBlur.bind(this)}
        containerClass={phoneContainerName}
        inputClass={styles.selectInput}
        buttonClass={styles.buttonSelectInput}
        dropdownClass={styles.dropdownSelectInput}
        {...props}
      />
      {errorStyle && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default SelectInput;
