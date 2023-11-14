import React, { InputHTMLAttributes } from 'react';
import { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import arrow from '@/assets/icons/arrowNotFilled.svg';
// import { Input } from '@/components/lips';

import { getClassNames } from './config';

import styles from './styles.module.scss';
import Input from '../../input';

export interface IEditableInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
  onBlur?: (val: any) => void;
  onChange?: (val: any) => void;
  id?: string;
}

const EditableInput: FC<IEditableInputProps> = ({
  touched,
  error,
  ...props
}) => {
  const [editMode, setEditMode] = useState(false);

  const shownError = error && touched;

  const inputRef = useRef<HTMLInputElement>(null);

  const {
    containerClassName,
    arrowWrapperClassName,
    imageClassName,
    errorClassName,
  } = getClassNames(editMode);

  useEffect(() => {
    if (editMode) {
      inputRef.current?.focus();
    }
  }, [editMode]);

  return (
    <div
      className={containerClassName}
      onClick={() => setEditMode((prevState) => !prevState)}
    >
      <div className={arrowWrapperClassName}>
        <Image
          src={arrow as unknown as string}
          alt="arrow"
          className={imageClassName}
        />
      </div>
      <Input
        touched={touched}
        error={error}
        disabled={!editMode}
        onClick={(e) => e.stopPropagation()}
        inputRef={inputRef}
        editMode={editMode}
        className={cn(styles.inputWrapper)}
        inputClassName={styles.input}
        {...props}
      />
      {shownError && <span className={errorClassName}>{error}</span>}
    </div>
  );
};

export default EditableInput;
