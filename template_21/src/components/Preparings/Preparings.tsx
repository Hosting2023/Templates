import React from 'react'
import styles from './Preparings.module.scss'
import { InfoBlock } from '../InfoBlock/InfoBlock'

export const Preparings = () => {
  const prepares = [
    'The importance of selecting an appropriate material for cleaning the floor to prevent slipping.',
    'The significance of using a suitable cleaning product for bathrooms to ensure effective removal of dirt and mold. It is recommended to use a special cleaner, such as "silit," for cleaning tiles.',
    'The necessity of using an appropriate cleaning product for washing windows when cleaning glass and mirrors. The appropriate product will make windows, mirrors, cabinet doors, light switches, and walls shiny, remove handprints, stains and dirt.',
  ]
  return (
    <InfoBlock>
      <ul className={styles.prepares}>
        {prepares.map((value, index) => (
          <li key={index} className={styles.prepare}>
            <span className={styles.number}>{index + 1}</span>
            <h4>{value}</h4>
          </li>
        ))}
      </ul>
      <div className={styles.learn}>
        <h3>learn more</h3>
      </div>
    </InfoBlock>
  )
}
