import type { FC } from 'react';
import React from 'react';
import { Form, Formik } from 'formik';

import { Button, Card, Text } from '@/components/lips';

import EmailField from './components/email-field/email-field';
import ErrorViewerForgotPassword from './components/errorViewer/ErrorViewerForgotPassword';
import TimerField from './components/timer-field';
import { ForgotPasswordText } from './constants/forgotPasswordText.enum';
import { validationSchemaForgotPassword } from './form-model/validation-schema';
import useForgotPasswordLogic from './hooks/forgot-password.hook';

import styles from './styles.module.scss';

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
        <Text
          align="left"
          weight="bold"
          transform="capitalize"
          className={styles.title}
        >
          {ForgotPasswordText.Forgot}
        </Text>
      </div>
      <Text
        size="sm"
        className={styles.text}
      >
        Please enter email you registered with
      </Text>
      <Card className={styles.cardEmailInput}>
        <Formik
          validateOnMount
          initialValues={{
            email: '',
            code: '',
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
      <Button>Next</Button>
    </div>
  );
};

export default ForgotPassword;
