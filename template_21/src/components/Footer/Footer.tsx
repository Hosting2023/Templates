import React from 'react'
import styles from './Footer.module.scss'
import WhatsApp from '../../../public/assets/icons/whatsapp.svg'
import Viber from '../../../public/assets/icons/viber.svg'
import Telegram from '../../../public/assets/icons/telegram.svg'
import { InfoBlock } from '../InfoBlock/InfoBlock'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <InfoBlock>
        <h2 className={styles.title}>contacts</h2>
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <Telegram />
            <h4 className={styles.social}>telegram</h4>
          </div>
          <div className={styles.contact}>
            <WhatsApp />
            <h4 className={styles.social}>whatsapp</h4>
          </div>
          <div className={styles.contact}>
            <Viber />
            <h4 className={styles.social}>viber</h4>
          </div>
        </div>
      </InfoBlock>
    </div>
  )
}
