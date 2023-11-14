import React, {
  DetailedHTMLProps,
  FC,
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
  RefObject,
  useState,
} from 'react';
import cn from 'classnames';

// import eye from '@/assets/icons/eye.svg';
// import { Button } from '@/components/lips';

import styles from './styles.module.scss';

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isRequired?: boolean;
  touched?: boolean;
  className?: string;
  error?: string;
  inputRef?: RefObject<HTMLInputElement>;
  inputClassName?: string;
  editMode?: boolean;
  errorClassName?: string;
  activeLabelClassName?: string;
  isPassword?: boolean;
  children?: ReactNode;
}

const Input: FC<IInputProps> = ({
  type,
  touched,
  placeholder,
  className,
  error,
  value,
  inputRef,
  inputClassName,
  activeLabelClassName = '',
  editMode,
  errorClassName,
  isPassword = false,
  onBlur = () => {
    console.log('here');
  },
  onFocus = () => {
    console.log('here');
  },
  isRequired = false,
  children,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  // const label = placeholder && `${placeholder} ${isRequired ? '*' : ''}`;
  const errorStyle = error && touched && !focus;

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (editMode === undefined) setFocus(false);
    onBlur(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    onFocus(e);
  };

  return (
    <div
      className={cn(
        styles.container,
        editMode ? styles.focusContainer : styles.withoutFocusContainer,
        !errorClassName && errorStyle && styles.errorContainer,
        className,
      )}
    >
      {/* <span
        className={cn(
          styles.label,
          (editMode === undefined ? focus : editMode) &&
            cn(styles.activeLabel, activeLabelClassName),
          (editMode === undefined ? !focus : !editMode) &&
            value !== '' &&
            styles.hiddenLabel,
        )}
      >
        {label}
      </span> */}
      {children || (
        <div className={styles.passwordField}>
          <input
            type={type === 'password' && isShowPassword ? 'text' : type}
            ref={inputRef}
            value={value}
            required={isRequired}
            onFocus={handleFocus.bind(this)}
            onBlur={handleBlur.bind(this)}
            className={cn(styles.input, inputClassName)}
            {...props}
          />
          {isPassword && (
            <div className={styles.passwordButtonWrapper}>
              {isShowPassword && <span className={styles.line} />}
              <button
                type="button"
                className={styles.passwordButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsShowPassword((prev) => !prev);
                }}
              />
            </div>
          )}
        </div>
      )}
      {errorStyle && (
        <span
          className={cn(
            styles.error,
            errorClassName,
            isPassword && styles.password,
          )}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
