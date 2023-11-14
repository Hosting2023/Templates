import React, { FC, InputHTMLAttributes, ReactNode } from 'react';

import withWrapper from '../helpers/hocs/withWrapper';

import styles from '../styles.module.scss';

export interface IDefaultInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  error?: string;
  errorClassName?: string;
  label: string;
  withInput?: boolean;
  touched?: boolean;
  noHeading?: boolean;
  noBackground?: boolean;
  noBorderBottom?: boolean;
  borderBottomLabel?: boolean;
}

const DefaultInput: FC<IDefaultInputProps> = ({
  children,
  withInput = true,
  ...props
}) => (
  <>
    {withInput && (
      <input
        id={`ph_${styles.input}`}
        className={styles.input}
        {...props}
      />
    )}
    {children}
  </>
);

export default withWrapper(DefaultInput);
