import React from 'react'
import styles from './InfoBlock.module.scss'

export const InfoBlock = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.infoblock}>{children}</div>
}
