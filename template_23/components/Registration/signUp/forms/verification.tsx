import React, { FC } from "react";
import type { FieldProps } from "formik";
import { Field } from "formik";

import CustomInput from "@/components/lips/customInput";

import type { InitValuesSignIn } from "../form-model/sign-in.interfaces";

import styles from "../styles.module.scss";


export interface ISignIpFormProps {
  fields?: InitValuesSignIn;
}

export const Verification: FC<ISignIpFormProps> = () => {
  // const { values, setFieldValue, errors } = useFormikContext<InitFormikValues>();

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.title}>
          <span className={styles.text}>Verification</span>
        </p>
        <Field name="Email">
          {({
            field,
            meta,
          }: FieldProps<{
            firstName: string;
          }>) => (
            <CustomInput
              variant="default"
              label=""
              key="Email"
              name="Email"
              required
              id="Email"
              // value={values.email}
              placeholder="Email"
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
            <CustomInput
              variant="default"
              label=""
              key="mobilePhone"
              name="mobilePhone"
              required
              id="mobilePhone"
              placeholder="Mobile Phone"
              onBlur={field.onBlur}
              touched={meta.touched}
              error={meta.error}
              onChange={field.onChange}
            />
          )}
        </Field>
        <div className={styles.buttonWrapper}>
          <button
            type="submit"
            //disabled={isDisabled}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
