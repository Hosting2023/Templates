import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Authentification.module.scss';
import Input from './Input';
import Button from './Button';

interface VerificationProps {}

const Verification: FC<VerificationProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.signUp_wrapper}>
      <h1 className={styles.modal_header}>{t('verification_title')}</h1>
      <div className={styles.signUp_inputs_wrapper}>
        <Input inputType="email" placeholder={t('verification_email')} />
        <Input inputType="tel" placeholder={t('verification_tel')} />
      </div>
      <Button>{t('verification_btn')}</Button>
    </div>
  );
};

export default Verification;
