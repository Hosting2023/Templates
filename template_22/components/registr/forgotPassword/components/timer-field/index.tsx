import type { FC } from 'react';
import React from 'react';
import { Field, FieldProps } from 'formik';

import { ConfirmCodeText } from '@/components/confirmCodeCard/constants/ConfirmCodeText';
import CustomInput from '@/components/lips/customInput';

import { IsConfirmVerifyCode } from '../../constants/IsConfirmVerifyCode.enum';

import { useTimerField } from './hooks/use-time-field-hook';
import Timer from './timer';

import styles from './styles.module.scss';
interface IForgotPasswordProps {
  errorEmail: boolean;
  isConfirmVerifyCode: IsConfirmVerifyCode;
  setIsConfirmVerifyCode: (val: IsConfirmVerifyCode) => void;
}

const TimerField: FC<IForgotPasswordProps> = ({
  errorEmail,
  isConfirmVerifyCode,
  setIsConfirmVerifyCode,
}) => {
  const { handleNumber } = useTimerField(
    setIsConfirmVerifyCode,
    isConfirmVerifyCode,
  );

  return (
    <>
      <Field
        name="code"
        id="code"
      >
        {({
          field,
          meta,
        }: FieldProps<{
          code: string;
        }>) => (
          <CustomInput
            variant="default"
            label={ConfirmCodeText.VerificationCode}
            type="number"
            id="code"
            disabled={!!errorEmail}
            value={field.value.code}
            error={meta.error}
            onChange={(event) => {
              handleNumber.bind(this);
              field.onChange(event);
            }}
            noBackground
            borderBottomLabel
            noBorderBottom
          />
        )}
      </Field>

      <div className={styles.timerWrapper}>
        <Timer timeForCodeSec={60} />
      </div>
    </>
  );
};

export default TimerField;
