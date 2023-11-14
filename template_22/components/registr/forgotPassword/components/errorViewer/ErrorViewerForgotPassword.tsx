import React, { FC } from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { StyleLabelAlign } from 'constants/styleLabels';

import { Card, Text } from '@/components/lips';
import { IsConfirmVerifyCode } from '@/components/registr/modalRegistration/signUp/form-model/sign-up.enum';

import useErrorMessage from './hooks/error-massages.hook';
import { getCardClassNames } from './config';

import styles from './styles.module.scss';

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
          <Text
            align={StyleLabelAlign.Center}
            className={styles.labelPrefix}
          >
            {errorMessage.prefix && `${errorMessage.prefix} &nbsp;`}
          </Text>
          <Text
            align={StyleLabelAlign.Center}
            className={styles.label}
          >
            {errorMessage.main}
          </Text>
        </Card>
      )}
      {forgotFetchError && (
        <Card className={cardClassName}>
          <Text
            align={StyleLabelAlign.Center}
            className={styles.label}
          >
            {generateErrorMessage()}
          </Text>
        </Card>
      )}
    </>
  );
};

export default ErrorViewerForgotPassword;
