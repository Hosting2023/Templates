import type { FC } from 'react';
import React from 'react';
import { Formik } from 'formik';

import { useResetPasswordMutation } from '@/store/services/auth/auth';

import { initFormikValuesResetPassword } from './form-model/init-values-reset-password';
import { validationSchemaResetPassword } from './form-model/validation-schema-reset-password';
import { SuccessResetPassword } from './form-response/success-reset-password';
import { MainScreenResetPassword } from './forms/MainScreenResetPassword';
import { useSubmitResetPassword } from './hooks/useSubmitResetPassword';

interface IResetPasswordProps {
  setIsOpen: (val: boolean) => void;
}

const ResetPassword: FC<IResetPasswordProps> = ({ setIsOpen }) => {
  const [resetPassword, { isLoading, error }] = useResetPasswordMutation();

  const { handleSubmit } = useSubmitResetPassword({
    setIsOpen,
    resetPassword,
    error,
  });

  return (
    <>
      <Formik
        validateOnMount
        initialValues={initFormikValuesResetPassword}
        validationSchema={validationSchemaResetPassword}
        onSubmit={handleSubmit}
      >
        {(formik) => <MainScreenResetPassword isValid={formik.isValid} />}
      </Formik>
      {/* TODO change loading and error for UI requirement */}
      {/* TODO it is required to set global error handler
          and pass there all error from HTTP and redux */}
      {isLoading && 'loading...'}
      {error && 'Bad request' && <SuccessResetPassword />}
    </>
  );
};

export default ResetPassword;
