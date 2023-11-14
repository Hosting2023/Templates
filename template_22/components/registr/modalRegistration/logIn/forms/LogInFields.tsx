import React, { FC, useState } from 'react';
import type { FieldProps } from 'formik';
import { Field, useFormikContext } from 'formik';

import { Button, Text } from '@/components/lips';
import CustomInput from '@/components/lips/customInput';

import type {
  InitFormikValuesSignIn,
  InitValuesSignIn,
} from '../form-model/sign-in.interfaces';

import styles from '../styles.module.scss';
import {
  StyleLabelSize,
  StyleLabelTransform,
  StyleLabelWeight,
} from '../../../../../constants/styleLabels';
import { ButtonLabelSingIn } from '@/components/registr/modalRegistration/logIn/constants/ButtonLabelSingIn';
import ForgotPassword from '@/components/registr/forgotPassword';

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
          <Text className={styles.title}>
            <span className={styles.text}>Log In</span>
          </Text>
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
                label="Email"
                key="Email"
                name="Email"
                id="Email"
                value="Email"
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
          <Button
            className={styles.link}
            onClick={() => setIsOpenForgotPass(true)}
          >
            <Text
              size={StyleLabelSize.Sm}
              weight={StyleLabelWeight.Bold}
              transform={StyleLabelTransform.Capitalize}
            >
              {ButtonLabelSingIn.ForgotPassword}
            </Text>
          </Button>
          <div className={styles.buttonWrapper}>
            <Button
              type="submit"
              disabled={!isValid}
            >
              Log In
            </Button>
          </div>
        </div>
      )}
      {isOpenForgotPass && <ForgotPassword closeModal={() => true} />}
    </>
  );
};
