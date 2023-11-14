import { FC, useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Image from 'next/image'
import Main from "../Main/Main";
interface INavigationItem {
   label: string;
   target: string;
}

const navigationItems: INavigationItem[] = [
   {
      label: 'adventages',
      target: '#adventages',
   },
   {
      label: 'filter',
      target: '#filter',
   },
   {
      label: 'schedule',
      target: '#schedule',
   },
   {
      label: 'contacts',
      target: '#contacts',
   },
];
const Navbar = ({ ShowModal }: any) => {

   return (
      <div className={styles.navbar_main}>
         <div className={styles.navbar}>
            <div className={`${styles.wrapper} wrapper`}>
               <div className={styles.navbar_content}>
                  <ul className={styles.nav}>
                     {
                        navigationItems.map((item: INavigationItem, index: number) => {
                           const { label, target } = item;
                           return (
                              <li className={styles.nav_item} key={index}>
                                 <a href={target} className={styles.nav_link}>
                                    {label}
                                 </a>
                              </li>
                           )
                        })
                     }
                  </ul>
                  <button className={`${styles.navbar_btn} btn`} onClick={() => { ShowModal(0) }}>
                     Sing up
                  </button>
               </div>
            </div>
         </div>
         <Main />
      </div>

   )
}


export default Navbar;