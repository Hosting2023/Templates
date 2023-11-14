import type { FC } from 'react';
import React from 'react';
import { Formik } from 'formik';

import { useLoginMutation } from '@/store/services/auth/auth';

import { initFormikValuesSignIn } from './form-model/init-values-sign-in';
import { validationSchemaSignIn } from './form-model/validation-schema-sign-in';
import { MainScreenLogIn } from './forms/MainScreenLogIn';
import { useSubmitSignIn } from './hooks/submit-sign-in-hook';

import styles from './styles.module.scss';

interface ISignInProps {
  setIsOpen: (val: boolean) => void;
  forgotPasswordHandler: VoidFunction;
}

const LogIn: FC<ISignInProps> = ({ setIsOpen, forgotPasswordHandler }) => {
  const [login, { isLoading, error }] = useLoginMutation();

  const { handleSubmit } = useSubmitSignIn({ setIsOpen, login, error });

  return (
    <>
      <Formik
        className={styles.container}
        validateOnMount
        initialValues={initFormikValuesSignIn}
        validationSchema={validationSchemaSignIn}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <MainScreenLogIn
            isValid={formik.isValid}
            forgotPasswordHandler={forgotPasswordHandler}
          />
        )}
      </Formik>
      {error && 'Bad request'}
      {isLoading && 'loading...'}
    </>
  );
};

export default LogIn;
