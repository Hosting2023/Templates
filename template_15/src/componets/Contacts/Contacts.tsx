import { FC } from "react";
import styles from "./Contacts.module.scss";
import Image from 'next/image';
import icon_1 from "@/public/icon_1.svg"
import icon_2 from "@/public/icon_2.svg"
import icon_3 from "@/public/icon_3.svg"


const icons = [icon_1, icon_2, icon_3];


const Contacts: FC = () => {
   return (<div className={styles.contacts} id="contacts">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.contacts_content}>
            <div className={`${styles.contacts_title} title`}>
               contacts
            </div>
            <div className={styles.contacts_icons}>
               {icons.map((icon, index) => {
                  return (
                     <div className={styles.contacts_icons_item} key={index}>
                        <Image
                           src={icon}
                           alt="icon"
                           layout="responsive"
                        />
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   </div>
   )
}
export default Contacts;