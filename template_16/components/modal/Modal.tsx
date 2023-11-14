import React, { useState, useEffect } from 'react';
import styles from './Modal.module.scss';
import {  useFormik } from 'formik';
import * as yup from "yup";

interface ModalProps {
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    const [step, setStep] = useState<
        'start' | 'signup' | 'contact' | 'login' | 'forgot' | 'forgotTimer' | 'resetPassword' | 'resetPasswordSuccess'
    >('start');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [mobilePhone, setMobilePhone] = useState('');
    const [password, setPassword] = useState('');
    const [timer, setTimer] = useState(30);
    const [showTimer, setShowTimer] = useState(false);

    const handleSignUpClick = () => {
        setStep('signup');
    };

    const handleLogInClick = () => {
        setStep('login');
    };

    const handleForgotPasswordClick = () => {
        setStep('forgot');
    };

    const handleNextClick = () => {
        if (step === 'start') {
            setStep('signup');
        } else if (step === 'signup') {
            setStep('contact');
        } else if (step === 'login') {
            onClose();
        } else if (step === 'forgot') {
            setShowTimer(true);
            setStep('forgotTimer');
            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            setTimeout(() => {
                clearInterval(countdown);
                setShowTimer(false);
            }, 30000);
        } else if (step === 'forgotTimer') {
            setStep('resetPassword')
        } else if (step === 'resetPassword') {
            setStep('resetPasswordSuccess')
        } else if (step === 'resetPasswordSuccess') {
            setStep('login')
        }
    };

    const validationSchema = yup.object().shape({
        email: yup.string().email("Please enter valid email").required("Required"),
        password: yup.string().min(5).required("Required"),
        name: yup.string().required("Required"),
        lastName: yup.string().required("Required"),
        mobilePhone: yup.number().required("Required"),
        verificationCode: yup.string().required("Required"),
        newPassword: yup.string().min(5).required("Required"),
        repeatNewPassword: yup.string().oneOf([yup.ref('newPassword')]).required("Required"),
    })

    const handleSendClick = () => {
        onClose();
    };

    const onSubmit = () => {
        console.log('sub');

    }

    const { values, handleBlur, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            dob: '',
            email: '',
            mobilePhone: '',
            password: '',
            verificationCode: '',
            newPassword: '',
            repeatNewPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit,
    })

    console.log(errors);

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button onClick={onClose} className={styles.closeButton}>
                    &times;
                </button>
                {step === 'start' && (
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={handleSignUpClick}>
                            Sign Up
                        </button>
                        <button className={styles.button} onClick={handleLogInClick}>Log In</button>
                    </div>
                )}
                {step === 'signup' && (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h2>Sign Up</h2>
                            <input
                                id='name'
                                type="text"
                                placeholder="Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                id='lastName'
                                type="text"
                                placeholder="Last Name"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // onChange={(e) => setLastName(e.target.value)}
                            />
                            <input
                                id='date'
                                type="date"
                                value={values.dob}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // onChange={(e) => setDob(e.target.value)}
                            />
                            <button className={styles.button} onClick={handleNextClick}>
                                Next
                            </button>
                        </div>
                    </form>

                )}
                {step === 'contact' && (
                    <div>
                        <h2>Sign Up</h2>
                        <input
                            id='email'
                            type="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            id='phone'
                            type="tel"
                            placeholder="Mobile Phone"
                            value={values.mobilePhone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        // onChange={(e) => setMobilePhone(e.target.value)}
                        />
                        <button className={styles.button} onClick={handleSendClick}>
                            Send
                        </button>
                    </div>
                )}
                {step === 'login' && (
                    <div>
                        <h2>Log In</h2>
                        <input
                            id='email'
                            type="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            id='password'
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        // onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className={styles.forgotPassword} onClick={handleForgotPasswordClick}>Forgot password?</p>
                        <button className={styles.button} onClick={handleNextClick}>
                            Next
                        </button>
                    </div>
                )}
                {step === 'forgot' && (
                    <div>
                        <h2>Forgot Password</h2>
                        <input
                            id='email'
                            type="text"
                            placeholder="Email or Mobile Phone"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className={styles.button} onClick={handleNextClick}>
                            Next
                        </button>
                    </div>
                )}
                {step === 'forgotTimer' && (
                    <div>
                        <h2>Forgot Password</h2>
                        <input
                            id='email'
                            type="text"
                            placeholder="Email or Mobile Phone"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>
                            {timer > 0
                                ? `Code expiration time: ${Math.floor(timer / 60)
                                    .toString()
                                    .padStart(2, '0')}:${(timer % 60)
                                        .toString()
                                        .padStart(2, '0')}`
                                : 'CODE has expired'}
                        </p>
                        <input
                            id='code'
                            type="text"
                            placeholder="Verification Code"
                            value={values.verificationCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <button className={styles.button} onClick={handleNextClick}>
                            Next
                        </button>
                    </div>
                )}
                {step === 'resetPassword' && (
                    <div>
                        <h2>Forgot Password</h2>
                        <input
                            id='newPassword'
                            type="password"
                            placeholder="New Password"
                            value={values.newPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <input
                            id='repeatNewPassword'
                            type="password"
                            placeholder="Repeat New Password"
                            value={values.repeatNewPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <button className={styles.button} onClick={handleNextClick}>
                            Send
                        </button>
                    </div>
                )}
                {step === 'resetPasswordSuccess' && (
                    <div>
                        <h2>Forgot Password</h2>
                        <p>Your password was changed</p>
                        <button className={styles.button} onClick={handleNextClick}>
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;