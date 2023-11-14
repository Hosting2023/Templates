import type { FC } from 'react';
import React from 'react';
import { Form } from 'formik';
import { initFormModelSignIn } from '../form-model/init-values-sign-in';

import { LogInFields } from './LogInFields';

import styles from '../styles.module.scss';

interface IMainScreenLogInProps {
  isValid: boolean;
  forgotPasswordHandler?: VoidFunction;
}

export const MainScreenLogIn: FC<IMainScreenLogInProps> = ({ isValid }) => (
  <>
    <Form className={styles.containerForm}>
      <LogInFields
        fields={initFormModelSignIn}
        isValid={isValid}
      />
    </Form>
  </>
);
