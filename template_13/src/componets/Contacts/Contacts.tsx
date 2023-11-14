import { FC } from "react";
import styles from "./Contacts.module.scss";
import Image from 'next/image';
import telegram from '@/public/Telegram-icon.svg';
import viber from '@/public/Viber-icon.svg';
import whatsapp from '@/public/Whatsapp-icon.svg';
const Contacts: FC = () => {
   return (<div className={styles.contacts} id="contacts">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.contacts_content}>
            <div className={`${styles.contacts_title} title`}>
               Contacts
            </div> <div className={styles.contacts_content_right}>

               <div className={styles.contacts_text}> If you have questions or need any information, use my contacts:
               </div>   <div className={styles.contacts_icons}>
                  <Image
                     src={telegram}
                     alt="telegram"
                  />
                  <Image
                     src={viber}
                     alt="viber"
                  />
                  <Image
                     src={whatsapp}
                     alt="whatsapp"
                  />
               </div>
            </div>
         </div>
      </div>
   </div>
   )
}
export default Contacts;