import React, { FC } from 'react';
import type { FieldProps } from 'formik';
import { Field, useFormikContext } from 'formik';

import { Card } from '@/components/lips';
import CustomInput from '@/components/lips/customInput';

import type { initFormModelResetPassword } from '../form-model/init-values-reset-password';
import type { InitFormikValuesResetPassword } from '../form-model/reset-password.interfaces';

import styles from '../styles.module.scss';

export interface IResetPasswordFieldsProps {
  fields: typeof initFormModelResetPassword;
}

export const ResetPasswordFields: FC<IResetPasswordFieldsProps> = ({
  fields,
}) => {
  const { values } = useFormikContext<InitFormikValuesResetPassword>();
  return (
    <Card className={styles.inputWrapper}>
      <Field name={fields.password.name}>
        {({
          field,
          meta,
        }: FieldProps<{
          password: string;
        }>) => (
          <CustomInput
            variant="password"
            label={fields.password.label}
            key={fields.password.name}
            name={fields.password.name}
            required
            id={fields.password.name}
            value={values.password}
            onBlur={field.onBlur}
            touched={meta.touched}
            error={meta.error}
            onChange={field.onChange}
            className={styles.input}
            noBorderBottom
            borderBottomLabel
          />
        )}
      </Field>
      <Field name={fields.password.name}>
        {({
          field,
          meta,
        }: FieldProps<{
          confirmPassword: string;
        }>) => (
          <CustomInput
            variant="password"
            label={fields.passwordConfirmation.label}
            key={fields.passwordConfirmation.name}
            name={fields.passwordConfirmation.name}
            required
            id={fields.passwordConfirmation.name}
            value={values.passwordConfirmation}
            onBlur={field.onBlur}
            touched={meta.touched}
            error={meta.error}
            onChange={field.onChange}
            className={styles.input}
            noBorderBottom
            borderBottomLabel
          />
        )}
      </Field>
    </Card>
  );
};
