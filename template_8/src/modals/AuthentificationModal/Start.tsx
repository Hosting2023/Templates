import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import styles from './Authentification.module.scss';
import Button from './Button';
import googleSvg from './assets/google.svg';
import facebookSvg from './assets/facebook.svg';
import { IPath } from './AuthentificationModal';

interface StartProps extends IPath {}

const Start: FC<StartProps> = ({ setModalPath }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.start_wrapper}>
      <h1 className={styles.modal_header}>{t('start_title')}</h1>
      <div
        onClick={() => setModalPath('sign up')}
        className={styles.start_topBtn}
      >
        <Button>{t('start_signUp')}</Button>
      </div>
      <div
        onClick={() => setModalPath('log in')}
        className={styles.start_topBtn}
      >
        <Button>{t('start_logIn')}</Button>
      </div>
      <div className={styles.start_bottom}>
        <div>
          <Image
            src={facebookSvg}
            alt="facebookImg"
            className={styles.start_bottom_img}
          />
          <Image
            src={googleSvg}
            alt="googleImg"
            className={styles.start_bottom_img}
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
