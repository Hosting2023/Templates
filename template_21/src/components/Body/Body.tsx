import React, { useContext } from 'react'
import { Paragraph } from '../Paragraph/Paragraph'
import styles from './Body.module.scss'
import { Advantages } from '../Advantages/Advantages'
import { Cleanings } from '../Cleanings/Cleanings'
import { Preparings } from '../Preparings/Preparings'
import { Filter } from '../FIlter/Filter'
import { Schedule } from '../Schedule/Schedule'
import { Reviews } from '../Reviews/Reviews'
import { Footer } from '../Footer/Footer'
import { AuthContext } from '@/context/AuthProvider'
import { AuthForm } from '../AuthForm/AuthForm'

export const Body = () => {
  const context: boolean = useContext(AuthContext)![0]
  return (
    <div className={styles.body}>
      {context && (
        <div className={styles.authForm}>
          <AuthForm />
        </div>
      )}
      <Paragraph name="Why exactly my services?" />
      <Advantages />
      <Cleanings />
      <Paragraph name="What you need to prepare for me" />
      <Preparings />
      <Paragraph name="Filter" />
      <Filter />
      <Paragraph name="Schedule" />
      <Schedule />
      <Paragraph name="Reviews" />
      <Reviews />
      <Footer />
    </div>
  )
}
