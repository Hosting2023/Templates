import { FC } from "react";
import styles from "./Contacts.module.scss";
import Image from "next/image";
import girl_2 from "@/public//girl-2.svg";

const Contacts: FC = () => {
   return (
      <div className={styles.contacts} id="contacts">
         <div className={`${styles.wrapper} wrapper`}>
            <div className={`${styles.contacts_title} title`}>
               Contacts
            </div>
            <div className={styles.contacts_content}>
               <div className={styles.contacts_img}>
                  <Image
                     src={girl_2}
                     width={250}
                     height={250}
                     alt={"girl"}
                  />
               </div>
               <div className={styles.contacts_info}>
                  <div className={styles.contacts_info_block}>
                     <div className={styles.contacts_info_text}>
                        We will contact you shortly to discuss further details and provide a customized service tailored to your needs and preferences.
                     </div>
                     <div className={styles.contacts_info_socials}>
                        <button className={`${styles.btn} btn`} >Whatsapp</button>
                        <button className={`${styles.btn} btn`} >Telegram</button>
                        <button className={`${styles.btn} btn`} >Viber</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contacts