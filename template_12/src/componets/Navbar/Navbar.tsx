import { FC, useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Image from 'next/image'
import burger from '@/public/burger.svg'
import burger_white from '@/public/burger-white.svg'
import Main from '@/componets/Main/Main'
import square from '@/public/main-square.svg'
const Navbar = ({ ShowModal }: any) => {

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
   return (<div className={styles.navbar_and_main}>
      <div className={styles.navbar}>
         <div className={`${styles.wrapper} wrapper`}>
            <nav className={`${styles.nav} ${menu ? styles.active : ""}`}>
               <div className={styles.menu}>
                  <ul>
                     <li>
                        <a href="#about" >About</a>
                     </li>
                     <li>
                        <a href="#services" >Services</a>
                     </li>
                     <li>
                        <a href="#clients" >Clients</a>
                     </li>
                     <li>
                        <a href="#contacts" >Contacts</a>
                     </li>
                  </ul>
               </div>
            </nav>
            <button
               className={`${styles.btn} btn`}
               onClick={() => { ShowModal(2) }}
            >Log in</button>
            <div className={styles.burger}>
               <Image src={menu ? burger_white : burger} width={40} height={40} alt="burger" onClick={() => setMenu(!menu)} />
            </div>
         </div>
      </div>
      <Image
         src={square}
         alt="square"
         className={styles.square}
      />
      <Image
         src={square}
         alt="square"
         className={styles.square_two}
      />
      <Main />
   </div>
   )
}


export default Navbar;