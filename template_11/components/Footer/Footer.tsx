import { FC } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import viber from '@/public/viber.svg';
import telegram from '@/public/telegram.svg';
import whatsapp from '@/public/whatsapp.svg';
const Footer: FC = () => {
   return (
      <div className={styles.footer} id="contacts">
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.footer_content}>
               <div className={styles.footer_content_text}>
                  I will contact you shortly to discuss further details and provide a personalized service tailored to your needs and preferences.
               </div>
               <div className={styles.footer_content_socials}>
                  <div className={styles.social}>
                     <Image
                        src={telegram}
                        alt="telegram"
                        className={styles.social_img}
                     />
                     <div className={styles.social_title}>
                        telegram
                     </div>                     </div>
                  <div className={styles.social}>
                     <Image
                        src={viber}
                        alt="viber"
                        className={styles.social_img}
                     />
                     <div className={styles.social_title}>
                        viber
                     </div>                     </div>
                  <div className={styles.social}>
                     <Image
                        src={whatsapp}
                        alt="whatsapp"
                        className={styles.social_img}
                     />
                     <div className={styles.social_title}>
                        whatsapp
                     </div>                     </div>


               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer