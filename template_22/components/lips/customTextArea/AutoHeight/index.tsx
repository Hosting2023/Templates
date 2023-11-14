import React, {
  DetailedHTMLProps,
  FC,
  ReactNode,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from 'react';

import { useAutosizeTextArea } from '@/hooks/useAutosizeTextarea';

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

const AutoHeightTextArea: FC<IDefaultTextAreaProps> = ({
  value,
  focus = false,
  children,
  rows = 1,
  ...props
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (focus) textAreaRef.current?.focus();
  }, [focus]);

  useAutosizeTextArea(textAreaRef.current, value as string);
  return (
    <>
      <textarea
        rows={rows}
        ref={textAreaRef}
        id={`ph_${styles.textareaInner}`}
        className={styles.textarea}
        {...props}
      />
      {children}
    </>
  );
};

export default AutoHeightTextArea;
