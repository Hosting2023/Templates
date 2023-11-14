import React from 'react'
import styles from './Advantages.module.scss'
import Watches from '../../../public/assets/icons/watches.svg'
import Pro from '../../../public/assets/icons/pro.svg'
import Calendar from '../../../public/assets/icons/calendar.svg'
import { InfoBlock } from '../InfoBlock/InfoBlock'

export const Advantages = () => {
  return (
    <InfoBlock>
      <div className={styles.advantages}>
        <div className={styles.advantage}>
          <div className={styles.icon}>
            <Watches />
          </div>

          <h3>time saving</h3>
        </div>
        <div className={styles.advantage}>
          <div className={styles.icon}>
            <Pro />
          </div>

          <h3>professional</h3>
        </div>
        <div className={styles.advantage}>
          <div className={styles.icon}>
            <Calendar />
          </div>

          <h3>convenient</h3>
        </div>
      </div>
    </InfoBlock>
  )
}
