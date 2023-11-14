import React, {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { getInitialText } from '@/components/lips/customInput/helpers/hocs/constants/getInitialText';
import { initialClassNames } from '@/components/lips/customInput/helpers/hocs/constants/initialClassNames';
import { MaskInputProps } from '@/components/lips/customInput/Mask';

import { getClassNames } from '../config';
import Wrapper from '../Wrapper';

type LabelProps = {
  error?: string;
  label: string;
  errorClassName?: string;
  touched?: boolean;
  noHeading?: boolean;
  noBackground?: boolean;
  noBorderBottom?: boolean;
  borderBottomLabel?: boolean;
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  maskPlaceholder?: string;
}

type WithWrapperProps =
  | (MaskInputProps & LabelProps)
  | (InputProps & LabelProps);

function withWrapper<T>(Component: FC<T & WithWrapperProps>) {
  return function H({
    value,
    touched,
    onChange,
    noHeading,
    noBackground,
    noBorderBottom,
    borderBottomLabel,
    required,
    defaultValue,
    maskPlaceholder,
    label,
    error,
    errorClassName,
    ...props
  }: T & WithWrapperProps) {
    const [text, setText] = useState<string | undefined | null>(
      getInitialText({ defaultValue, maskPlaceholder }),
    );
    const [localTouched, setLocalTouched] = useState(touched);
    const [wrapperClasses, setWrapperClasses] = useState(initialClassNames);
    useEffect(() => {
      setWrapperClasses(
        getClassNames({
          text,
          label,
          error,
          noHeading,
          noBackground,
          noBorderBottom,
          borderBottomLabel,
          touched: localTouched,
        }),
      );
    }, [text, error, noHeading, noBorderBottom, localTouched]);

    useEffect(() => {
      if (typeof value !== undefined) {
        setText(value as string);
      }
    }, [value]);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { value: eValue } = e.currentTarget;
        setText(eValue);
        setLocalTouched(true);
        return onChange && onChange(e);
      },
      [onChange],
    );

    return (
      <Wrapper
        label={label}
        error={error}
        errorClassName={errorClassName}
        required={required}
        touched={localTouched}
        {...wrapperClasses}
      >
        <Component
          onChange={handleChange}
          value={text}
          {...(props as T & LabelProps & InputProps)}
        />
      </Wrapper>
    );
  };
}

export default withWrapper;
