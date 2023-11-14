import { Dispatch, FC, SetStateAction, useState } from 'react';
import Image from 'next/image';

import styles from './Authentification.module.scss';
import Modal from '../Modal';
import Start from './Start';
import SignUp from './SignUp';
import LogIn from './LogIn';
import closeSvg from './assets/close.svg';
import Verification from './Verification';
import ForgotPassword from './ForgotPassword';

export interface IPath {
  setModalPath: Dispatch<
    SetStateAction<
      'start' | 'sign up' | 'log in' | 'verification' | 'forgot password'
    >
  >;
}

interface AuthentificationModalProps {
  setModalOpened: Dispatch<SetStateAction<boolean>>;
}

const AuthentificationModal: FC<AuthentificationModalProps> = ({
  setModalOpened,
}) => {
  const [modalPath, setModalPath] = useState<
    'start' | 'sign up' | 'log in' | 'verification' | 'forgot password'
  >('start');

  console.log(modalPath);

  return (
    <Modal setModalOpened={setModalOpened}>
      <div
        className={styles.modal_wrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.modal_closeBtn}
          onClick={() => setModalOpened(false)}
        >
          <Image
            src={closeSvg}
            alt="close img"
            className={styles.modal_closeBtn_close}
          />
        </button>
        {modalPath === 'start' ? (
          <Start setModalPath={setModalPath} />
        ) : modalPath === 'sign up' ? (
          <SignUp setModalPath={setModalPath} />
        ) : modalPath === 'log in' ? (
          <LogIn setModalPath={setModalPath} />
        ) : modalPath === 'verification' ? (
          <Verification />
        ) : modalPath === 'forgot password' ? (
          <ForgotPassword setModalPath={setModalPath} />
        ) : (
          ''
        )}
      </div>
    </Modal>
  );
};

export default AuthentificationModal;
