import Button from '@/components/lips/button';
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import esc from '@/assets/icons_registretion/esc.svg';
import facebook from '@/assets/icons_registretion/facebook.svg';
import { StyleLabelAlt } from '../../../constants/styleLabels';
import google from '@/assets/icons_registretion/google.svg';
import SignUp from './signUp';
import LogIn from '@/components/registr/modalRegistration/logIn';

interface ModalProps {
  onClose: () => void;
}

const RegistrationModal: FC<ModalProps> = ({ onClose }) => {
  const [showSingUpForm, setShowSingUpForm] = useState(false);
  const [showLogInForm, setShowLogInForm] = useState(false);

  const handleSignUpClick = () => {
    setShowSingUpForm(true);
  };
  const handleLogInClick = () => {
    setShowLogInForm(true);
  };

  const forgotPasswordHandler = () => {
    console.log('here');
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
        >
          <Image
            src={esc as unknown as string}
            alt="icon"
          />
        </button>
        {!showSingUpForm && !showLogInForm && (
          <div>
            <h2 className={styles.modalTitle}>
              To order please login or register
            </h2>
            <div className={styles.buttonContainer}>
              <Button onClick={handleSignUpClick}>Sign up</Button>
              <div className={styles.buttonSpacing} />
              <Button onClick={handleLogInClick}>Log in</Button>
            </div>
            <div className={styles.socialNetworks}>
              <Image
                src={facebook as unknown as string}
                alt={StyleLabelAlt.Facebook}
              />
              <Image
                src={google as unknown as string}
                alt={StyleLabelAlt.Google}
              />
            </div>
          </div>
        )}
        {showSingUpForm && <SignUp setIsOpen={() => console.log('open')} />}
        {showLogInForm && (
          <LogIn
            forgotPasswordHandler={forgotPasswordHandler}
            setIsOpen={() => console.log('here')}
          />
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
