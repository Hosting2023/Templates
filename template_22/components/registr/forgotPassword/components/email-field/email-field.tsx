import type { FC } from 'react';
import React, { useState } from 'react';
import { Field, FieldProps } from 'formik';
import CustomInput from '@/components/lips/customInput';

import { ForgotPasswordText } from '../../constants/forgotPasswordText.enum';

import styles from './styles.module.scss';

interface IForgotPasswordProps {
  isValid: boolean;
}

const EmailField: FC<IForgotPasswordProps> = ({ isValid }) => {
  const [isShowEdit, setIsShowEdit] = useState({
    edit: false,
    send: true,
    reset: false,
  });
  return (
    <div className={styles.emailWrapper}>
      <Field
        name="email"
        id="email"
      >
        {({
          field,
          meta,
        }: FieldProps<{
          email: string;
        }>) => (
          <CustomInput
            // ref={inputRef}
            variant="default"
            label={ForgotPasswordText.EnterEmail}
            type="email"
            id="email"
            value={field.value.email}
            error={meta.error}
            onChange={field.onChange}
            className={styles.input}
            noBackground
            borderBottomLabel
            noBorderBottom
            disabled={isShowEdit.edit === true}
          />
        )}
      </Field>
      {/*{isShowEdit.edit === true ? (*/}
      {/*  <Button*/}
      {/*    className={styles.icon}*/}
      {/*    height="small"*/}
      {/*    onClick={() => {*/}
      {/*      setIsShowEdit({ send: false, reset: true, edit: false });*/}
      {/*    }}*/}
      {/*  ></Button>*/}
      {/*) : (*/}
      {/*  <Button*/}
      {/*    disabled={!isValid}*/}
      {/*    type="submit"*/}
      {/*    //className={styles.button}*/}
      {/*    // onClick={() => {*/}
      {/*    //   setIsShowEdit({ send: false, reset: true, edit: true });*/}
      {/*    // }}*/}
      {/*  >*/}
      {/*    {isShowEdit.send === true*/}
      {/*      ? ForgotPasswordText.Send*/}
      {/*      : ConfirmCodeText.Resend}*/}
      {/*  </Button>*/}
      {/*)}*/}
    </div>
  );
};

export default EmailField;
