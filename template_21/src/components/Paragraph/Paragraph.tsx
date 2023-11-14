import React from 'react'
import styles from './Paragraph.module.scss'

export const Paragraph = ({ name }: { name: string }) => {
  return (
    <div className={styles.container}>
      <span className={styles.line} />
      <h2 className={styles.title}>{name}</h2>
      <span className={styles.line} />
    </div>
  )
}
