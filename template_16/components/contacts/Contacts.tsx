import React from 'react';
import styles from "./Contacts.module.scss";

const Contacts: React.FC = () => {
    return (
        <div className={styles.footBg}>
            <div className={styles.contacts}>
                <div className={styles.contactsHeader}>
                    <h2>contacts</h2>
                </div>
                <div className={styles.contactsFooter}>
                    <button>Viber</button>
                    <button>WhatsApp</button>
                    <button>Telegram</button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;