import { FC } from "react";
import styles from "./Clients.module.scss";
import Image from 'next/image';
import square from '@/public/main-square.svg'
import soap from '@/public/soap.svg'
const Clients: FC = () => {
   return (<div className={styles.clients} id="clients">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.clients_up}>
            <div className={`${styles.clients_title} title`}>
            Clients
         </div>
            <Image
                  src={soap}
                  alt="soap"
                  className={styles.soap_img}
               />
         </div>
         
         <div className={styles.clients_content}>
            <div className={styles.clients_content_text}>
               <div className={styles.clients_content_question}>
                  What you need to prepare for me
               </div>
               <p>The importance of selecting an appropriate material for cleaning the floor to prevent slipping.</p>
               <p>The significance of using a suitable cleaning product for bathrooms to ensure effective removal of dirt and mold. It is recommended to use a special cleaner, such as "silit," for cleaning tiles.</p>
               <p>The necessity of using an appropriate cleaning product for washing windows when cleaning glass and mirrors. The appropriate product will make windows, mirrors, cabinet doors, light switches, and walls shiny, remove handprints, stains and dirt.</p>
               <Image
                  src={square}
                  alt="square"
                  className={styles.square}
               />
            </div>

            <div className={styles.clients_img}>
               <Image
                  src={square}
                  alt="square"
                  className={styles.square}
               />
               <Image
                  src={soap}
                  alt="soap"
                  className={styles.soap}
               />
            </div>
         </div>
      </div>
   </div>
   )
}



export default Clients;