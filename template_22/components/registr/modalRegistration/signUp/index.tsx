import type { FC } from 'react';
import React from 'react';
import { Formik } from 'formik';

import { useLoginMutation } from '@/store/services/auth/auth';

import { initFormikValuesSignIn } from './form-model/init-values-sign-in';
import { validationSchemaSignIn } from './form-model/validation-schema-sign-in';
import { MainScreenSignUp } from './forms/MainScreenSignUp';
import { useSubmitSignIn } from './hooks/submit-sign-in-hook';

import styles from './styles.module.scss';

interface ISignInProps {
  setIsOpen: (val: boolean) => void;
}

const SignUp: FC<ISignInProps> = ({ setIsOpen }) => {
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
        {(formik) => <MainScreenSignUp isValid={formik.isValid} />}
      </Formik>
      {error && 'Bad request'}
      {isLoading && 'loading...'}
    </>
  );
};

export default SignUp;
