import { FC, useState } from "react";
import style from "./styles.module.scss";
import Image from "next/image";
import facebook from "@/assets/iconsRegistration/facebook.svg";
import google from "@/assets/iconsRegistration/Google.svg";
import close from "@/assets/iconsRegistration/close.svg";
import SignUp from "./signUp/index";
import LogIn from "./logIn/index";

interface ModalProps {
  onClose: () => void;
}

const Registration: FC<ModalProps> = ({ onClose }) => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLogInForm, setShowLogInForm] = useState(false);

  const handleSignUpForm = () => {
    setShowSignUpForm(true);
  };

  const handleLogInUpForm = () => {
    setShowLogInForm(true);
  };

  const forgotPasswordHandler = () => {
    console.log("here");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.modalContent}>
        <Image
          className={style.close}
          onClick={onClose}
          src={close as unknown as string}
          alt=""
        />
        {!showSignUpForm && !showLogInForm && (
          <div className={style.btnContainer}>
            <div onClick={handleSignUpForm} className={style.btn}>
              sign up
            </div>
            <div onClick={handleLogInUpForm} className={style.btn}>
              log in
            </div>
            <p>or</p>
            <div className={style.socialIcons}>
              <Image src={facebook as unknown as string} alt="" />
              <Image src={google as unknown as string} alt="" />
            </div>
          </div>
        )}
        {showSignUpForm && <SignUp setIsOpen={() => console.log("open")} />}
        {showLogInForm && (
          <LogIn
            forgotPasswordHandler={forgotPasswordHandler}
            setIsOpen={() => console.log("here")}
          />
        )}
      </div>
    </div>
  );
};

export default Registration;
