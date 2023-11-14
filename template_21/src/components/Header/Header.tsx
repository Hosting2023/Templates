import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import img from '../../../public/assets/images/Felics_Full.jpg'

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.bar}>
        <div className={styles.links}>
          <button className={styles.navLink}>Services</button>
          <button className={styles.navLink}>Contacts</button>
        </div>
      </nav>
      <div className={styles.welcome}>
        <div className={styles.picture}>
          <Image src={img} alt="Picture" fill />
        </div>
        <div className={styles.title}>
          <h3>let me do the cleaning: </h3>
          <h2>discover the benefits of my professional maid services</h2>
          <button className={styles.button}>go to schedule</button>
        </div>
      </div>
    </div>
  )
}
