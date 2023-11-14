'use client'
import React, { useContext, useState } from 'react'
import styles from './LoginForm.module.scss'
import { Input } from '../../UI/input/Input'
import { LoginFormDto } from '../../../../api/dto/auth.dto'
import * as Api from '../../../../api'
import { setCookie } from 'nookies'
import { AuthContext } from '@/context/AuthProvider'
import { isEmailValid } from '@/utils/isEmailValid'

export const LoginForm = () => {
  const emptyForm = { email: '', password: '' }
  const [loginForm, setLoginForm] = useState<LoginFormDto>(emptyForm)
  const setContext = useContext(AuthContext)![1]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { token } = await Api.auth.login(loginForm)
      setLoginForm(emptyForm)
      setCookie(null, '_token', token, { path: '/' })
      alert('Authorized successfully!')
      setContext(false)
    } catch (e) {
      console.log('LoginForm', e)
      alert('Error!')
    }
  }

  const handleChange = (field: string, value: string) => {
    setLoginForm({ ...loginForm, [field]: value })
  }

  return (
    <div className={styles.wrapper}>
      <form action="" onSubmit={e => handleSubmit(e)} className={styles.form}>
        <div className={styles.fields}>
          <Input
            value={loginForm.email}
            onChange={value => handleChange('email', value)}
            placeholder="Email"
            wrong={!isEmailValid(loginForm.email) && loginForm.email.length > 0}
          />
          <Input
            type="password"
            value={loginForm.password}
            onChange={value => handleChange('password', value)}
            placeholder="Password"
          />
        </div>
        <input
          type="submit"
          title="Send"
          value="Send"
          className={styles.submit}
          disabled={!isEmailValid(loginForm.email)}
        />
      </form>
    </div>
  )
}
