import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Authentification.module.scss';
import Button from './Button';
import Input from './Input';
import keySvg from './assets/key.svg';
import Image from 'next/image';
import { IPath } from './AuthentificationModal';

interface ForgotPasswordProps extends IPath {}

const ForgotPassword: FC<ForgotPasswordProps> = ({ setModalPath }) => {
  const { t } = useTranslation();
  const [page, setPage] = useState<1 | 2 | 3 | 4>(1);

  return (
    <div className={styles.signUp_wrapper}>
      <h1>{t('forgot_title')}</h1>
      {page === 1 ? (
        <>
          <div className={styles.signUp_inputs_wrapper}>
            <Input inputType="text" placeholder={t('logIn_please')} />
          </div>
          <div onClick={() => setPage(2)}>
            <Button>{t('verification_btn')}</Button>
          </div>
        </>
      ) : page === 2 ? (
        <>
          <div className={styles.signUp_inputs_wrapper}>
            <Input inputType="text" placeholder={t('logIn_please')} />
            <Input inputType="text" placeholder={t('forgot_verification')} />
          </div>
          <div onClick={() => setPage(3)}>
            <Button>{t('verification_btn')}</Button>
          </div>
        </>
      ) : page === 3 ? (
        <>
          <div className={styles.signUp_inputs_wrapper}>
            <Input inputType="text" placeholder={t('forgot_newPass')} />
            <Input inputType="text" placeholder={t('forgot_repeat')} />
          </div>
          <div onClick={() => setPage(4)}>
            <Button>{t('verification_btn')}</Button>
          </div>
        </>
      ) : page === 4 ? (
        <>
          <div className={styles.changedPassword}>
            <span>{t('forgot_passChanged')}</span>
            <Image
              src={keySvg}
              alt="key img"
              className={styles.changedPassword_img}
            />
          </div>
          <div onClick={() => setModalPath('log in')}>
            <Button>{t('forgot_done')}</Button>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default ForgotPassword;
