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
  touched = false,
}: IWrapperProps) => (
  <div className={containerClassName}>
    <div className={styles.inputWrapper}>
      <label
        htmlFor={`ph_${styles.input}`}
        className={styles.label}
      >
        {children}
        {touched && error && (
          <span className={cn(styles.error, errorClassName)}>{error}</span>
        )}
      </label>
    </div>
  </div>
);

export default Wrapper;
