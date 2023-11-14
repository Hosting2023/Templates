import React, { useState, useEffect } from 'react';
import styles from "./Navbar.module.scss";

function Navbar({ ShowModal }: any) {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
      const handleScrollLock = () => {
         document.body.classList.toggle(styles['no-scroll'], isMenuOpen && window.innerWidth <= 740);
      };

      handleScrollLock();
      window.addEventListener('resize', handleScrollLock);

      return () => {
         window.removeEventListener('resize', handleScrollLock);
      };
   }, [isMenuOpen]);

   const handleMenuToggle = () => {
      setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
   };

   return (
      <div className={styles.navbar}>
         <div className={`${styles.wrapper} wrapper`}>
            <nav className={!isMenuOpen ? styles.nav : `${styles.nav} ${styles.active}`}>
               <ul>
                  <li>
                     <a href="#">Services</a>
                  </li>
                  <li>
                     <a href="#">Contacts</a>
                  </li>
                  <li>
                     <a href="#">Schedule</a>
                  </li>
                  <li>
                     <a href="#">Questions</a>
                  </li>
               </ul>
            </nav>
            <div className={styles.navbar_buttons}>
               <button className={`${styles.button} ${styles.signup}`} onClick={() => { ShowModal(1) }}>Sign up</button>
               <button className={`${styles.button} ${styles.login}`} onClick={() => { ShowModal(2) }}>Log in</button>
            </div>
            <div className={styles.burger}>
               <div className={`${styles['burger-menu']} ${isMenuOpen ? styles.active : ''}`} onClick={handleMenuToggle}>
                  <div className={`${styles.line} ${isMenuOpen ? styles.active : ''}`} />
                  <div className={`${styles.line} ${isMenuOpen ? styles.active : ''}`} />
                  <div className={`${styles.line} ${isMenuOpen ? styles.active : ''}`} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
