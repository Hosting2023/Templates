import { FC, useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Image from 'next/image'
import navbar_circle from "@/public/navbar-circle.svg"

interface INavigationItem {
   label: string;
   target: string;
}

const navigationItems: INavigationItem[] = [
   {
      label: 'Benefits',
      target: '#benefits',
   },
   {
      label: 'Portfolio',
      target: '#portfolio',
   },
   {
      label: 'Schedule',
      target: '#schedule',
   },
   {
      label: 'Contacts',
      target: '#contacts',
   },
];

const Navbar = ({ ShowModal }: any) => {

   return (
      <div className={styles.navbar}>
         <Image
            src={navbar_circle}
            alt={navbar_circle}
            className={styles.navbar_circle}
         />
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.navbar_content}>
               <div className={styles.navbar_content_butttons}>
                  <button className={`${styles.navbar_btn} btn`} onClick={() => { ShowModal(1) }}>
                     Sing up
                  </button>
                  <button className={`${styles.navbar_btn} btn`} onClick={() => { ShowModal(2) }}>
                     Log in
                  </button>
               </div>
               <div className={styles.navbar_content_text}>
                  <div className={styles.navbar_content_big_title}>
                     easy
                     cleaning
                     help
                  </div>
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
               </div>
            </div>
         </div>
      </div>
   )
}
export default Navbar;