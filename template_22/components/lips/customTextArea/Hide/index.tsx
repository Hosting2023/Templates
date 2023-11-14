import {
  DetailedHTMLProps,
  FC,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';
import React from 'react';
import Image from 'next/image';

import arrow from '@/assets/icons/arrowNotFilled.svg';

import { useToggleFocus } from '../helpers/toggle-focus.hook';

import { getTextAreaClassNames } from './config';

import styles from '../styles.module.scss';
export interface IDefaultTextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  children?: ReactNode;
  error?: string;
  errorClassName?: string;
  label?: string;
  touched?: boolean;
  noHeading?: boolean;
  noBackground?: boolean;
  rows?: number;
  focus?: boolean;
}

const HideTextArea: FC<IDefaultTextAreaProps> = ({
  children,
  rows = 1,
  value,
  placeholder,
  touched,
  error,
  ...props
}) => {
  const { elementRef, arrowToggled, handleFocus, handleBlur, toggleArrow } =
    useToggleFocus();
  const { containerClassName, arrowClassName } = getTextAreaClassNames({
    error,
    arrowToggled,
  });

  return (
    <div
      className={containerClassName}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <span className={styles.label}>{placeholder}</span>

      <textarea
        rows={rows}
        ref={elementRef}
        id={`ph_${styles.textareaInner}`}
        className={styles.textarea}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
      <div
        className={styles.arrowWrapper}
        onClick={toggleArrow}
      >
        <Image
          src={arrow as unknown as string}
          alt="arrow"
          className={arrowClassName}
        />
      </div>
    </div>
  );
};

export default HideTextArea;
