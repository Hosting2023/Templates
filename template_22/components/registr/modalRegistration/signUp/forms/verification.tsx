import React, { FC } from 'react';
import type { FieldProps } from 'formik';
import { Field } from 'formik';

import CustomInput from '@/components/lips/customInput';

import type { InitValuesSignIn } from '../form-model/sign-in.interfaces';

import styles from '../styles.module.scss';
import { Button, Text } from '@/components/lips';
// import PhoneInput from 'react-phone-input-2';
// import { InitFormikValues } from '../form-model/sign-up.interfaces';

export interface ISignIpFormProps {
  fields?: InitValuesSignIn;
}

export const Verification: FC<ISignIpFormProps> = () => (
  // {
  //   // fields
  // },
  //{
  // const { values, setFieldValue, errors } =
  //   useFormikContext<InitFormikValues>();

  <div>
    <div className={styles.container}>
      <Text className={styles.title}>
        <span className={styles.text}>Verification</span>
      </Text>
      <Field name="Email">
        {({
          field,
          meta,
        }: FieldProps<{
          firstName: string;
        }>) => (
          <CustomInput
            variant="default"
            label="Email"
            key="Email"
            name="Email"
            required
            id="Email"
            value="Email"
            onBlur={field.onBlur}
            touched={meta.touched}
            error={meta.error}
            onChange={field.onChange}
          />
        )}
      </Field>
      <Field name="mobilePhone">
        {({
          field,
          meta,
        }: FieldProps<{
          lastName: string;
        }>) => (
          // <CustomInput
          //   variant="default"
          //   label=""
          //   key="mobilePhone"
          //   value="Mobile phone"
          //   error={meta.error}
          //   onBlur={field.onBlur}
          //   touched={meta.touched}
          //   withInput={false}
          //   noHeading
          // >
          //   {/*<PhoneInput*/}
          //   {/*  className={styles.phoneInput}*/}
          //   {/*  key="numberPhone"*/}
          //   {/*  placeholder=""*/}
          //   {/*  onBlur={field.onBlur}*/}
          //   {/*  //error={errors.mobileNumber}*/}
          //   {/*  focusInputOnCountrySelection={false}*/}
          //   {/*  defaultCountry="BY"*/}
          //   {/*  value="mobilePhone"*/}
          //   {/*  onChange={(value) => {*/}
          //   {/*    //setFieldValue(field.name, value);*/}
          //   {/*    console.log(value)*/}
          //   {/*  }}*/}
          //   {/*/>*/}
          // </CustomInput>
          <CustomInput
            variant="default"
            label="Email"
            key="Email"
            name="Email"
            required
            id="Email"
            value="Mobile phone"
            onBlur={field.onBlur}
            touched={meta.touched}
            error={meta.error}
            onChange={field.onChange}
          />
        )}
      </Field>
      <div className={styles.buttonWrapper}>
        <Button
          type="submit"
          //disabled={isDisabled}
        >
          Send
        </Button>
      </div>
    </div>
  </div>
);
