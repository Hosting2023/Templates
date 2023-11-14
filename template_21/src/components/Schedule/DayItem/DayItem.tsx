import React, { useContext, useState } from 'react'
import styles from './DayItem.module.scss'
import { OrderContext } from '@/context/OrderProvider'

export const DayItem = ({ day }: { day: { dayName: string; times: string[] } }) => {
  const [active, setActive] = useState<string[]>([])
  const context = useContext(OrderContext)![0]
  const setContext = useContext(OrderContext)![1]

  const handleChoose = (value: string) => {
    setActive(active.includes(value) ? active.filter(item => item !== value) : [...active, value])
    const newSchedule = {
      ...context.schedule,
      [day.dayName]: context.schedule[day.dayName].includes(value)
        ? context.schedule[day.dayName].filter((item: string) => item !== value)
        : [...context.schedule[day.dayName], value],
    }

    setContext((prev: any) => (prev = { ...prev, schedule: newSchedule }))
  }

  return (
    <div className={styles.day}>
      <div className={styles.title}>
        <h3>{day.dayName}</h3>
      </div>

      <ul className={styles.times}>
        {day.times.map((time, index) => (
          <li key={index} className={active.includes(time) ? styles.selected : styles.default}>
            <input type="button" value={time} onClick={() => handleChoose(time)} />
          </li>
        ))}
      </ul>
    </div>
  )
}
