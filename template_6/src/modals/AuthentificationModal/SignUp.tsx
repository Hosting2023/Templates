import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Authentification.module.scss';
import Input from './Input';
import Button from './Button';
import { IPath } from './AuthentificationModal';

interface SignUpProps extends IPath {}

const SignUp: FC<SignUpProps> = ({ setModalPath }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.signUp_wrapper}>
      <h1 className={styles.modal_header}>{t('signUp_title')}</h1>
      <div className={styles.signUp_inputs_wrapper}>
        <Input inputType="text" placeholder={t('signUp_name')} />
        <Input inputType="text" placeholder={t('signUp_lastName')} />
        <Input inputType="text" placeholder={t('signUp_date')} />
      </div>
      <div onClick={() => setModalPath('verification')}>
        <Button>{t('signUp_btn')}</Button>
      </div>
    </div>
  );
};

export default SignUp;
