import type { FC } from 'react';
import React from 'react';
import { Form } from 'formik';

import { initFormModelSignIn } from '../form-model/init-values-sign-in';

import { SignUpFields } from './SignUpFields';

import styles from '../styles.module.scss';

interface IMainScreenSignUpProps {
  isValid?: boolean;
}

export const MainScreenSignUp: FC<IMainScreenSignUpProps> = () => (
  // {
  //   //isValid
  // },
  <>
    <Form className={styles.containerForm}>
      <SignUpFields fields={initFormModelSignIn} />
    </Form>
  </>
);
