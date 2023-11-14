'use client'
import React, { useContext, useState } from 'react'
import styles from './SignUpForm.module.scss'
import { Input } from '../../UI/input/Input'
import * as Api from '../../../../api'
import { setCookie } from 'nookies'
import { isEmailValid } from '@/utils/isEmailValid'
import { AuthContext } from '@/context/AuthProvider'

export const SignUpForm = () => {
  const emptyForm = { email: '', password: '', firstname: '' }
  const [signUpForm, setSignUpForm] = useState(emptyForm)
  const [repeat, setRepeat] = useState('')
  const setContext = useContext(AuthContext)![1]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { token } = await Api.auth.register(signUpForm)
      setSignUpForm(emptyForm)
      setRepeat('')
      setCookie(null, '_token', token, { path: '/' })
      alert('Account was created successfully!')
      setContext(false)
    } catch (e) {
      console.log('SignUpForm', e)
      alert('Error!')
    }
  }
  const handleChange = (field: string, value: string) => {
    setSignUpForm({ ...signUpForm, [field]: value })
  }

  return (
    <div className={styles.wrapper}>
      <form action="" onSubmit={e => handleSubmit(e)} className={styles.form}>
        <div className={styles.fields}>
          <Input
            value={signUpForm.firstname}
            onChange={value => handleChange('firstname', value)}
            placeholder="Firstname"
          />
          <Input
            value={signUpForm.email}
            onChange={value => handleChange('email', value)}
            placeholder="Email"
            wrong={!isEmailValid(signUpForm.email) && signUpForm.email.length > 0}
          />
          <Input
            type="password"
            value={signUpForm.password}
            onChange={value => handleChange('password', value)}
            placeholder="Password"
            wrong={
              repeat !== signUpForm.password && signUpForm.password.length > 0 && repeat.length > 0
            }
          />
          <Input
            type="password"
            value={repeat}
            onChange={value => setRepeat(value)}
            placeholder="Repeat password"
            wrong={
              repeat !== signUpForm.password && signUpForm.password.length > 0 && repeat.length > 0
            }
          />
        </div>
        <input
          type="submit"
          title="Send"
          value="Send"
          className={styles.submit}
          disabled={
            !isEmailValid(signUpForm.email) ||
            (repeat !== signUpForm.password && signUpForm.password.length > 0 && repeat.length > 0)
          }
        />
      </form>
    </div>
  )
}
