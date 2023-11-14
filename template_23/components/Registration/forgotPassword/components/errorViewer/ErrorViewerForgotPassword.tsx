import React, { FC } from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { IsConfirmVerifyCode } from '@/components/Registration/signUp/form-model/sign-up.enum';

import useErrorMessage from './hooks/error-massages.hook';
import { getCardClassNames } from './config';

import styles from './styles.module.scss';
import Card from '@/components/lips/card';

export interface IErrorMessage {
  main: string;
  prefix: string;
  isConfirmVerifyCode: IsConfirmVerifyCode;
}
export interface ErrorViewerForgotPasswordProps {
  isConfirmVerifyCode: IsConfirmVerifyCode;
  forgotFetchError:
    | FetchBaseQueryError
    | SerializedError
    | undefined
    | { message?: string };
  forgotFetchIsSuccess: boolean;
}

const ErrorViewerForgotPassword: FC<ErrorViewerForgotPasswordProps> = ({
  isConfirmVerifyCode = IsConfirmVerifyCode.Default,
  forgotFetchError,
  forgotFetchIsSuccess,
}) => {
  const [errorMessage, generateErrorMessage] = useErrorMessage(
    isConfirmVerifyCode,
    forgotFetchError,
    forgotFetchIsSuccess,
  );
  const { cardClassName } = getCardClassNames({ error: !!forgotFetchError });

  return (
    <>
      {errorMessage.main && (
        <Card className={styles.cardContainer}>
          <p
            // align={StyleLabelAlign.Center}
            className={styles.labelPrefix}
          >
            {errorMessage.prefix && `${errorMessage.prefix} &nbsp;`}
          </p>
          <p
            // align={StyleLabelAlign.Center}
            className={styles.label}
          >
            {errorMessage.main}
          </p>
        </Card>
      )}
      {forgotFetchError && (
        <Card className={cardClassName}>
          <p
            // align={StyleLabelAlign.Center}
            className={styles.label}
          >
            {generateErrorMessage()}
          </p>
        </Card>
      )}
    </>
  );
};

export default ErrorViewerForgotPassword;
