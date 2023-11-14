import React, { useState, useEffect } from 'react'
import styles from './Modal.module.scss';

import * as yup from 'yup';


enum Page {
   Login = 1,
   ForgotPassword = 2,
   ForgotPasswordEmail = 3,
   ForgotNewPassword = 4,
   ForgotChangedPassword = 5,
}
const page2Schema = yup.object().shape({
   email: yup.string().trim().email('Invalid email format').required('Email is required'),
   password: yup.string().trim().required('Password is required'),
});


function MobileLogin() {
   const [page, setPage] = useState<Page>(Page.Login);
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [emailError, setEmailError] = useState<string>('');
   const [passwordError, setPasswordError] = useState<string>('');
   const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

   const handleLoginClick = () => {
      setFormSubmitted(true);
   };

   const validateForm = async () => {
      try {
         await page2Schema.validate({ email, password }, { abortEarly: false });
         setEmailError('');
         setPasswordError('');
         return true;
      } catch (err: any) {
         const errors = err.inner.reduce((acc: any, current: any) => {
            acc[current.path] = current.message;
            return acc;
         }, {});
         setEmailError(errors.email || '');
         setPasswordError(errors.password || '');
         return false;
      }
   };

   useEffect(() => {
      if (formSubmitted) {
         validateForm();
      }
   }, [formSubmitted, email, password]);

   return (
      <div className={styles.content_singup}>
         {page === Page.Login && (
            <>
               <h1 className={styles['modal-register']}>Log In</h1>
               <div className={styles.form}>
                  <div className={`${styles['input-container']} ${emailError ? styles['error-input'] : ''}`}>
                     <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     {emailError && <div className={styles['error-message']}>{emailError}</div>}
                  </div>
                  <div className={`${styles['input-container']} ${passwordError ? styles['error-input'] : ''}`}>
                     <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     {passwordError && <div className={styles['error-message']}>{passwordError}</div>}
                  </div>
                  <p className={styles.forgot} onClick={() => setPage(Page.ForgotPassword)}>
                     Forgot password?
                  </p>
                  <button className={styles.button} onClick={handleLoginClick}>
                     Next
                  </button>
               </div>
            </>

         )}
         {page === Page.ForgotPassword && <ForgotPassword NextPage={() => setPage(Page.ForgotPasswordEmail)} />}
         {page === Page.ForgotPasswordEmail && <ForgotPasswordEmail NextPage={() => setPage(Page.ForgotNewPassword)} />}
         {page === Page.ForgotNewPassword && <ForgotNewPassword NextPage={() => setPage(Page.ForgotChangedPassword)} />}
         {page === Page.ForgotChangedPassword && <ForgotChangedPassword NextPage={() => setPage(Page.Login)} />}
      </div>
   )
}



export default MobileLogin


const emailSchema = yup.object().shape({
   email: yup.string().trim().email('Invalid email format').required('Email is required'),
});

const ForgotPassword = ({ NextPage }: any) => {
   const [email, setEmail] = React.useState<string>('');
   const [emailError, setEmailError] = React.useState<string>('');

   const validateEmail = async () => {
      try {
         await emailSchema.validate({ email }, { abortEarly: false });
         setEmailError('');
         return true;
      } catch (err: any) {
         const errors = err.inner.reduce((acc: any, current: any) => {
            acc[current.path] = current.message;
            return acc;
         }, {});
         setEmailError(errors.email || '');
         return false;
      }
   };


   React.useEffect(() => {
      if (email !== '') {
         validateEmail();
      }
   }, [email]);

   const handleNextClick = async () => {
      const isValid = await validateEmail();
      if (isValid) {
         NextPage();
      }
   };
   return (
      <>
         <h1 className={styles['modal-register']}>Forgot password</h1>
         <div className={styles.form}>
            <div className={`${styles['input-container']} ${emailError ? styles['error-input'] : ''}`}>
               <input
                  type="email"
                  placeholder="Please enter email you registered with"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
               />
               {emailError && <div className={styles['error-message']}>{emailError}</div>}
            </div>
            <button className={styles.button} onClick={handleNextClick}>
               Next
            </button>
         </div>
      </>

   );
};


const ForgotPasswordEmail = ({ NextPage }: any) => {
   const [email, setEmail] = React.useState<string>("");
   const [code, setCode] = React.useState<string>("");
   const [showSendButton, setShowSendButton] = useState(true);
   const [timer, setTimer] = useState(5);

   useEffect(() => {
      let interval: any;

      if (timer > 0 && showSendButton) {
         interval = setInterval(() => {
            setTimer((prevTimer: any) => prevTimer - 1);
         }, 1000);
      }
      else {
         setShowSendButton(false);
      }

      return () => {
         clearInterval(interval);
      };
   }, [timer, showSendButton]);


   return (
      <>
         <h1 className={styles['modal-register']}>Forgot password</h1>
         <div className={styles.form}>
            <div className={styles['input-container']}>
               <input
                  type="email"
                  placeholder="Please enter email you registered with"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
               />
            </div>
            <div className={styles['input-container']}>
               <input
                  type="text"
                  placeholder="Code"
                  value={code}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
               />
            </div>
            {showSendButton ? (
               <div className={styles.code}>
                  Code expiration time {`00:${timer.toString().padStart(2, '0')}`}
               </div>
            ) : (
               <button className={styles.button} onClick={NextPage}>Send</button>
            )}
         </div>
      </>

   );
};



const ForgotNewPassword = ({ NextPage }: any) => {
   const [password, setPassword] = React.useState<string>("");
   const [confirmPassword, setConfirmPassword] = React.useState<string>("");
   const [passwordError, setPasswordError] = React.useState<string>("");
   const [sendPassword, setSendPassword] = React.useState<boolean>(false);
   useEffect(() => {
      if (sendPassword) {
         if (password !== confirmPassword) {
            setPasswordError("Passwords do not match");
         } else {
            setPasswordError("");
         }
      }
   }, [password, confirmPassword]);

   const handleNextClick = () => {
      setSendPassword(true);
      if (password !== confirmPassword) {
         setPasswordError("Passwords do not match");
         return;
      }

      NextPage();
   };

   return (
      <>
         <h1 className={styles['modal-register']}>Forgot password</h1>
         <div className={styles.form}>
            <div className={`${styles['input-container']} ${passwordError ? styles['error-input'] : ''}`}>
               <input
                  type="password"
                  placeholder="New password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
               />
            </div>
            <div className={`${styles['input-container']} ${passwordError ? styles['error-input'] : ''}`}>
               <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
               />
               {passwordError && <div className={styles['error-message']}>{passwordError}</div>}
            </div>
            <button className={styles.button} onClick={handleNextClick}>Done</button>
         </div>
      </>

   );
};




const ForgotChangedPassword = ({ NextPage }: any) => {
   return (
      <div className={styles.content_singup}>
         <h1 className={styles['modal-register']}>Forgot password</h1>
         <div className={styles.form}>
            <div className={styles.key}>
               <p>Your password was changed</p>
               <img src="/Key.svg" alt="" />
            </div>
            <button className={styles.button} onClick={NextPage}>Done</button>
         </div>
      </div>

   );
};
