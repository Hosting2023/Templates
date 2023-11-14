import React, { FC, ReactNode, TextareaHTMLAttributes } from 'react';

import styles from '../styles.module.scss';

export interface IDefaultTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  children?: ReactNode;
  error?: string;
  errorClassName?: string;
  label?: string;
  touched?: boolean;
  noHeading?: boolean;
  noBackground?: boolean;
  rows?: number;
}

const DefaultTextArea: FC<IDefaultTextAreaProps> = ({
  children,
  rows = 1,
  ...props
}) => (
  <>
    <textarea
      rows={rows}
      id={`ph_${styles.textareaInner}`}
      className={styles.textarea}
      {...props}
    />
    {children}
  </>
);

export default DefaultTextArea;
