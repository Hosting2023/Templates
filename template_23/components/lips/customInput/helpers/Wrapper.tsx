import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from '../styles.module.scss';

interface IWrapperProps {
  children: ReactNode;
  containerClassName: string;
  error?: string;
  errorClassName?: string;
  label: string;
  labelTextClassName: string;
  required?: boolean;
  touched?: boolean;
}

const Wrapper: FC<IWrapperProps> = ({
  children,
  containerClassName,
  error,
  errorClassName,
  label,
  labelTextClassName,
  required,
  touched = false,
}: IWrapperProps) => (
  <div className={containerClassName}>
    <div className={styles.inputWrapper}>
      <label
        htmlFor={`ph_${styles.input}`}
        className={styles.label}
      >
        {children}
        {label && (
          <span className={labelTextClassName}>
            {label}
            {required && '*'}
          </span>
        )}
      </label>
    </div>
    {touched && error && (
      <span className={cn(styles.error, errorClassName)}>{error}</span>
    )}
  </div>
);

export default Wrapper;
