import { FC } from "react";
import styles from "./Contacts.module.scss";

const Contacts: FC = () => {
   return (<div className={styles.contacts} id="contacts">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={`${styles.contacts_title} title `}>
            Contacts
         </div>
         <div className={styles.contacts_content}>
            <div className={styles.social}>
               Viber
            </div>
            <div className={styles.social}>
               Telegram
            </div>
            <div className={styles.social}>
               WhatsApp
            </div>
         </div>
      </div>
   </div>

   )
}

export default Contacts;