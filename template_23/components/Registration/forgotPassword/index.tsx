import type { FC } from "react";
import React from "react";
import { Form, Formik } from "formik";


import EmailField from "./components/email-field/email-field";
import ErrorViewerForgotPassword from "./components/errorViewer/ErrorViewerForgotPassword";
import TimerField from "./components/timer-field";
import { ForgotPasswordText } from "./constants/forgotPasswordText.enum";
import { validationSchemaForgotPassword } from "./form-model/validation-schema";
import useForgotPasswordLogic from "./hooks/forgot-password.hook";

import styles from "./styles.module.scss";
import Card from "@/components/lips/card";

interface IForgotPasswordProps {
  closeModal: (val: boolean) => void;
}

const ForgotPassword: FC<IForgotPasswordProps> = ({ closeModal }) => {
  const {
    isConfirmVerifyCode,
    isOpenTimer,
    handleSubmit,
    forgotFetchError,
    isSuccess,
    setIsConfirmVerifyCode,
  } = useForgotPasswordLogic(closeModal);

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>{ForgotPasswordText.Forgot}</p>
      </div>
      <p className={styles.text}>Please enter email you registered with</p>
      <Card className={styles.cardEmailInput}>
        <Formik
          validateOnMount
          initialValues={{
            email: "",
            code: "",
          }}
          validationSchema={validationSchemaForgotPassword}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className={styles.container}>
              <EmailField isValid={formik.isValid} />
              {isOpenTimer && (
                <TimerField
                  errorEmail={false}
                  isConfirmVerifyCode={isConfirmVerifyCode}
                  setIsConfirmVerifyCode={setIsConfirmVerifyCode}
                />
              )}
              <ErrorViewerForgotPassword
                isConfirmVerifyCode={isConfirmVerifyCode}
                forgotFetchError={forgotFetchError}
                forgotFetchIsSuccess={isSuccess}
              />
            </Form>
          )}
        </Formik>
      </Card>
      <button>Next</button>
    </div>
  );
};

export default ForgotPassword;
