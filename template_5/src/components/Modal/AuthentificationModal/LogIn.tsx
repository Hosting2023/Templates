import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Authentification.module.scss';
import Button from './Button';
import Input from './Input';
import { IPath } from './AuthentificationModal';

interface LogInProps extends IPath {}

const LogIn: FC<LogInProps> = ({ setModalPath }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.signUp_wrapper}>
      <h1>{t('logIn_title')}</h1>
      <div className={styles.signUp_inputs_wrapper}>
        <Input inputType="text" placeholder={t('logIn_please')} />
        <Input inputType="password" placeholder={t('logIn_password')} />
        <button
          className={styles.signUp_wrapper_forgot}
          onClick={() => setModalPath('forgot password')}
        >
          {t('logIn_forgot')}
        </button>
      </div>
      <div>
        <Button>{t('logIn_btn')}</Button>
      </div>
    </div>
  );
};

export default LogIn;
