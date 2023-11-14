import React, { FC, useState } from 'react';
import type { FieldProps } from 'formik';
import { Field } from 'formik';

import CustomInput from '@/components/lips/customInput';

import type { InitValuesSignIn } from '../form-model/sign-in.interfaces';

import styles from '../styles.module.scss';
import { Button, Text } from '@/components/lips';

import DatePickerInput from '@/components/lips/datePickerInput';
import { Verification } from '@/components/registr/modalRegistration/signUp/forms/verification';

export interface ISignUpFormProps {
  fields?: InitValuesSignIn;
}

export const SignUpFields: FC<ISignUpFormProps> = () =>
  // {
  //   // fields
  // },
  {
    //const { values } = useFormikContext<InitFormikValuesSignIn>();
    const [isVerificationOpen, setIsVerificationOpen] = useState(false);

    const openVerification = () => {
      setIsVerificationOpen(true);
    };
    return (
      <div>
        {!isVerificationOpen && (
          <div className={styles.container}>
            <Text className={styles.title}>
              <span className={styles.text}>Sing UP</span>
            </Text>
            <Field name="firstName">
              {({
                field,
                meta,
              }: FieldProps<{
                firstName: string;
              }>) => (
                <CustomInput
                  variant="default"
                  label="firstName"
                  key="firstName"
                  name="firstName"
                  required
                  id="firstName"
                  value="firstName"
                  onBlur={field.onBlur}
                  touched={meta.touched}
                  error={meta.error}
                  onChange={field.onChange}
                />
              )}
            </Field>
            <Field name="lastName">
              {({
                field,
                meta,
              }: FieldProps<{
                lastName: string;
              }>) => (
                <CustomInput
                  variant="default"
                  label="lastName"
                  key="lastName"
                  name="lastName"
                  id="lastName"
                  value="lastName"
                  onBlur={field.onBlur}
                  touched={meta.touched}
                  error={meta.error}
                  onChange={field.onChange}
                />
              )}
            </Field>
            <Field name="dateOfBirth">
              {() => (
                <DatePickerInput
                  name="dateOfBirth"
                  caption="dateOfBirth"
                  id="dateOfBirth"
                  //value="dateOfBirth"
                  //onChangeForm={setFieldValue}
                />
              )}
            </Field>
            <div className={styles.buttonWrapper}>
              <Button
                type="submit"
                //disabled={isDisabled}
                onClick={openVerification}
              >
                Next
              </Button>
            </div>
          </div>
        )}
        {isVerificationOpen && <Verification />}
      </div>
    );
  };
