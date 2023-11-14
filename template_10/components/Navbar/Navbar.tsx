import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.scss';
import burger from '@/public/hamburger.svg';
const Navbar = ({ ShowModal }: any) => {
   const ShowModals = (num: number) => {
      ShowModal(num);
      setMenu(false);
   };

   const [menu, setMenu] = useState<boolean>(false);

   useEffect(() => {
      const handleScroll = () => {
         setMenu(false);
      };

      const handleClickOutside = (event: MouseEvent) => {
         const target = event.target as HTMLElement;
         const menuElement = document.querySelector(`.${styles.menu}`);
         const burgerElement = document.querySelector(`.${styles.burger}`);

         if (menuElement && !menuElement.contains(target) && burgerElement && !burgerElement.contains(target)) {
            setMenu(false);
         }
      };

      window.addEventListener('scroll', handleScroll);
      document.addEventListener('click', handleClickOutside);

      return () => {
         window.removeEventListener('scroll', handleScroll);
         document.removeEventListener('click', handleClickOutside);
      };
   }, []);
   return (
      <div className={styles.navbar}>
         <div className={`${styles.wrapper} wrapper`}>
            <nav className={`${styles.nav} ${menu ? styles.active : ""}`}>
               <div className={styles.back}></div>
               <div className={styles.menu}>
                  <ul>
                     <li>
                        <a href="#services" >SERVICES</a>
                     </li>
                     <li>
                        <a href="#about" >ABOUT</a>
                     </li>
                     <li>
                        <a href="#schedule" >SCHEDULE</a>
                     </li>
                     <li>
                        <a href="#contacts" >CONTACTS</a>
                     </li>
                  </ul>
                  <div className={styles.navbar_buttons}>
                     <button className={styles.navbar_button} onClick={() => { ShowModals(1) }}>LOG IN</button>
                     <button className={styles.navbar_button} onClick={() => { ShowModals(2) }}>SIGN UP</button>
                  </div>
               </div>
            </nav>

            <div className={styles.burger}>
               <Image
                  onClick={() => setMenu(!menu)}
                  src={burger}
                  alt="menu"
                  width={40}
                  height={40}
               />
            </div>



         </div>
      </div>
   )
}

export default Navbar;