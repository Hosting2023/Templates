import { useTranslations } from "next-intl";
import { TranslateType } from "@/types";

import styles from "./Footer.module.scss";
import Label from "../Label/Label";

const Footer = () => {
    const tContacts = useTranslations("Contacts");
    const contacts: TranslateType = {
        title: tContacts("title"),
        whatsapp: tContacts("messengers.whatsapp"),
        viber: tContacts("messengers.viber"),
        telegram: tContacts("messengers.telegram"),
    };
    return (
        <div className={styles.footer} id="contacts">
            <Label item={contacts.title} />
            <div className={styles.footer__messengers}>
                <button>{contacts.whatsapp}</button>
                <button>{contacts.viber}</button>
                <button>{contacts.telegram}</button>
            </div>
        </div>
    );
};

export default Footer;
