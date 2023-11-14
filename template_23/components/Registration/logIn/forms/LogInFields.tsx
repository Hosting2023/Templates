import React, { FC, useState } from 'react';
import type { FieldProps } from 'formik';
import { Field, useFormikContext } from 'formik';

import CustomInput from '@/components/lips/customInput';

import type {
  InitFormikValuesSignIn,
  InitValuesSignIn,
} from '../form-model/sign-in.interfaces';

import styles from '../styles.module.scss';

import { ButtonLabelSingIn } from '@/components/Registration/logIn/constants/ButtonLabelSingIn';
import ForgotPassword from '@/components/Registration/forgotPassword';

export interface ILogIpFormProps {
  isValid: boolean;
  fields: InitValuesSignIn;
}

export const LogInFields: FC<ILogIpFormProps> = ({ fields, isValid }) => {
  const { values } = useFormikContext<InitFormikValuesSignIn>();
  const [isOpenForgotPass, setIsOpenForgotPass] = useState(false);
  return (
    <>
      {!isOpenForgotPass && (
        <div className={styles.container}>
          <p className={styles.title}>
            <span className={styles.text}>Log In</span>
          </p>
          <Field
            name={fields.identifier.name}
            id={fields.identifier.name}
          >
            {({
              field,
              meta,
            }: FieldProps<{
              emailOrPhone: string;
            }>) => (
              <CustomInput
                variant="default"
                label=""
                key="Email"
                name="Email"
                id="Email"
                value=""
                placeholder='Email'
                onBlur={field.onBlur}
                touched={meta.touched}
                error={meta.error}
                onChange={field.onChange}
                className={styles.input}
              />
            )}
          </Field>

          <Field name={fields.password.name}>
            {({
              field,
              meta,
            }: FieldProps<{
              password: string;
            }>) => (
              <CustomInput
                variant="password"
                label="password"
                type="password"
                key="password"
                name="password"
                id="password"
                value="Password"
                onBlur={field.onBlur}
                touched={meta.touched}
                error={meta.error}
                onChange={field.onChange}
                className={styles.input}
              />
            )}
          </Field>
          <button
            className={styles.link}
            onClick={() => setIsOpenForgotPass(true)}
          >
            <p>
              {ButtonLabelSingIn.ForgotPassword}
            </p>
          </button>
          <div className={styles.buttonWrapper}>
            <button
              type="submit"
              disabled={!isValid}
            >
              Log In
            </button>
          </div>
        </div>
      )}
      {isOpenForgotPass && <ForgotPassword closeModal={() => true} />}
    </>
  );
};
