import { FC } from "react";
import styles from "./Contacts.module.scss";
import Image from 'next/image';
import contact_icon_1 from '@/public/contact_icon_1.svg';
import contact_icon_2 from '@/public/contact_icon_2.svg';
import contact_icon_3 from '@/public/contact_icon_3.svg';

const dataContacts = [
   {
      img: contact_icon_1,
      title: "WhatsApp",
   },
   {
      img: contact_icon_2,
      title: "Telegram",
   },
   {
      img: contact_icon_3,
      title: "Viber",
   },

];
const Contacts: FC = () => {
   return (<div className={styles.contacts} id="contacts">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.contacts_content}>
            <div className={`${styles.contacts_title} title`}>
               <span>My</span> contacts
            </div>
            <div className={styles.contacts_content_icons}>
               {
                  dataContacts.map((item, index) => {
                     return (
                        <div className={styles.contacts_content_icons_block} key={index}>
                           <div className={styles.contacts_content_icons_img}>
                              <Image
                                 src={item.img}
                                 alt="icon"
                                 layout="responsive"
                              />
                           </div>
                           <div className={styles.contacts_content_icons_title}>
                              {item.title}
                           </div>
                        </div>
                     )

                  }
                  )
               }
            </div>
         </div>
      </div>
   </div>
   )
}
export default Contacts;