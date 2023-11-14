import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
   return (
      <div className={styles.footer}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.footer_content}>
               <div className={styles.block_contacts}>
                  <div className={styles.title_contact}>Contacts</div>
                  <div className={styles.socials}>
                     <div className={styles.social_block}>
                        <img src="/whatsapp.svg" alt="" />
                     </div>
                     <div className={styles.social_block}>
                        <img src="/viber.svg" alt="" />
                     </div>
                     <div className={styles.social_block}>
                        <img src="/telegram.svg" alt="" />
                     </div>
                  </div>
               </div>
               <div className={styles.share}>
                  <div className={styles.share_title}>Share mobile app</div>
                  <div className={styles.qr_codes}>
                     <img className={styles.share_img} src="/share.svg" alt="" />
                     <img className={styles.qr_img} src="/qrcode.svg" alt="" />
                  </div>
               </div>
            </div>
            <div className={styles.privacy}>
               <p>Terms of use</p>
               <p>Privacy Policy</p>
               <p>2023</p>
            </div>
         </div>
      </div>
   );
}

export default Footer;
