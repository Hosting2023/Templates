import React, { useContext, useState } from 'react'
import styles from './Schedule.module.scss'
import { InfoBlock } from '../InfoBlock/InfoBlock'
import { DayItem } from './DayItem/DayItem'
import { OrderContext } from '@/context/OrderProvider'
import * as Api from '../../../api'
import { hasEmptyFields } from '@/utils/hasEmptyFields'
import { AuthContext } from '@/context/AuthProvider'

const days = [
  { dayName: 'monday', times: ['8:00-11:00', '10:30-12:00', '18:00-20:00'] },
  { dayName: 'tuesday', times: ['9:00-12:00', '12:30-15:00', '20:00-22:00'] },
  { dayName: 'wednesday', times: ['8:00-11:00', '10:30-12:00', '18:00-20:00'] },
  { dayName: 'thursday', times: ['9:00-12:00', '12:30-15:00', '20:00-22:00'] },
  { dayName: 'friday', times: ['8:00-11:00', '10:30-12:00', '18:00-20:00'] },
  { dayName: 'saturday', times: ['9:00-12:00', '12:30-15:00', '20:00-22:00'] },
  { dayName: 'sunday', times: ['8:00-11:00', '10:30-12:00', '18:00-20:00'] },
]

export const Schedule = () => {
  const context = useContext(OrderContext)![0]
  const setShowAuth = useContext(AuthContext)![1]
  const [showModal, setShowModal] = useState(true)

  const getSchedule = () => {
    let result: string[] = []
    for (const [key, value] of Object.entries(context.schedule) as [string, string[]][]) {
      if (value.length === 0) continue
      result.push(`${key[0].toLocaleUpperCase() + key.slice(1)}(${value.join(', ')!})`)
    }

    return result.join(', ')
  }

  const handleSubmit = async () => {
    try {
      await Api.auth.getMe()

      const newOrder = { ...context, schedule: getSchedule() }

      if (hasEmptyFields(newOrder)) {
        alert('You need to fill all fields!')
        return
      }

      await Api.auth.order(newOrder)
      alert('Order was created successfully!')
    } catch (e) {
      console.log('OrderForm', e)
      alert('Error while creating order!')
      setShowAuth(true)
    }
  }
  return (
    <InfoBlock>
      <div className={styles.schedule}>
        <div className={styles.form}>
          {days.map((value, index) => (
            <DayItem key={index} day={value} />
          ))}
        </div>
        <div className={styles.search}>
          <button onClick={() => handleSubmit()}>order</button>
        </div>
      </div>
    </InfoBlock>
  )
}
