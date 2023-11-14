'use client'
import React, { useContext, useState } from 'react'
import styles from './AuthForm.module.scss'
import CloseIcon from '../../../public/assets/icons/closeIcon.svg'
import FacebookIcon from '../../../public/assets/icons/Facebook.svg'
import GoogleIcon from '../../../public/assets/icons/Google.svg'
import BackIcon from '../../../public/assets/icons/left-arrow-4-svgrepo-com.svg'
import { SignUpForm } from './SignUpForm/SignUpForm'
import { LoginForm } from './LoginForm/LoginForm'
import { AuthContext } from '@/context/AuthProvider'

export const AuthForm: React.FC = () => {
  const [form, setForm] = useState<'Sign Up' | 'Log In' | 'menu'>('menu')

  const setContext = useContext(AuthContext)![1]
  return (
    <div className={styles.anchor}>
      <div className={styles.window}>
        <div className={styles.head}>
          <div
            className={styles.bar}
            style={{ justifyContent: form !== 'menu' ? 'space-between' : 'right' }}
          >
            {form !== 'menu' && (
              <button className={styles.back} onClick={() => setForm('menu')}>
                <BackIcon />
              </button>
            )}
            <button className={styles.close} onClick={() => setContext(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className={styles.decor}>
            <h2 className={styles.title}>{form !== 'menu' ? form : ''}</h2>
          </div>
        </div>

        <div className={styles.tools}>
          {form === 'menu' && (
            <>
              <div className={styles.buttons}>
                <button className={styles.button} onClick={() => setForm('Sign Up')}>
                  Sign up
                </button>
                <button className={styles.button} onClick={() => setForm('Log In')}>
                  Log in
                </button>
              </div>
              <div className={styles.socials}>
                <FacebookIcon />
                <GoogleIcon />
              </div>
            </>
          )}
          {form === 'Sign Up' && <SignUpForm />}
          {form === 'Log In' && <LoginForm />}
          {form !== 'menu' && (
            <div className={styles.already}>
              <h4 onClick={() => setForm(form === 'Sign Up' ? 'Log In' : 'Sign Up')}>
                {form === 'Sign Up' ? 'Already ' : "Don't "} have an account?
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
