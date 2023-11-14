import { FC, useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Image from 'next/image'
import burger from "@/public/burger.svg"
import user_1 from "@/public/user_1.svg"
import user_2 from "@/public/user_2.svg"

interface INavigationItem {
   label: string;
   target: string;
}

const navigationItems: INavigationItem[] = [
   {
      label: 'services',
      target: '#services',
   },
   {
      label: 'benefits',
      target: '#benefits',
   },
   {
      label: 'about',
      target: '#about',
   },
   {
      label: 'filter',
      target: '#filter',
   },
   {
      label: 'contacts',
      target: '#contacts',
   },
];
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


   return (
      <div className={styles.navbar}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.navbar_content}>
               <div className={styles.burger}>
                  <Image src={burger} width={40} height={40} alt="burger" onClick={() => setMenu(!menu)} />
               </div>
               <nav className={`${styles.nav} ${menu ? styles.active : ""}`}>
                  <ul>
                     {
                        navigationItems.map((item: INavigationItem, index) => {
                           return <li key={index}>
                              <a href={item.target}>{item.label}</a>
                           </li>
                        }
                        )
                     }
                  </ul>
               </nav>
               <div className={styles.buttons}>
                  <div className={styles.button}>
                     <Image
                        src={user_1}
                        width={40}
                        height={40}
                        alt="user_1"
                        onClick={() => ShowModal(1)}
                     />
                  </div>
                  <div className={styles.button}>
                     <Image
                        src={user_2}
                        width={40}
                        height={40}
                        alt="user_2"
                        onClick={() => ShowModal(2)}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}


export default Navbar;