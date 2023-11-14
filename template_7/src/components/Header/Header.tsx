import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import styles from "./Header.module.scss";
import telegramSvg from "@/public/assets/contacts/telegram_black.svg";
import whatsAppSvg from "@/public/assets/contacts/whatsApp_black.svg";
import viberSvg from "@/public/assets/contacts/viber_black.svg";
import bgSvg from "@/public/assets/header/bg.svg";
import NavBar, { scrollToElement } from "../NavBar/NavBar";
import MainButton from "@/src/ui/Buttons/MainButton/MainButton";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.header_page}>
      <header
        className={styles.header_header}
        style={i18n.language === "he" ? { padding: "1% 10% 1% 3%" } : { padding: "1% 3% 1% 10%" }}
      >
        <NavBar />
        <div className={styles.header_header_right}>
          <div className={styles.header_header_right_contacts}>
            <Image
              src={telegramSvg}
              alt="Telegram img"
              className={styles.header_header_right_contacts_img}
            />
            <Image
              src={whatsAppSvg}
              alt="WhatsApp img"
              className={styles.header_header_right_contacts_img}
            />
            <Image
              src={viberSvg}
              alt="Viber img"
              className={styles.header_header_right_contacts_img}
            />
          </div>
          <div className={styles.header_header_right_auth}>
            <span className={styles.header_header_right_auth_text}>{t("header_signUp")}</span>
            <span className={styles.header_header_right_auth_text}>{t("header_logIn")}</span>
          </div>
        </div>
      </header>
      <div
        className={styles.header_content}
        style={i18n.language === "he" ? { alignItems: "flex-start" } : { alignItems: "flex-end" }}
      >
        <Image src={bgSvg} alt={"Background img"} className={styles.header_content_bg} />
        <p className={styles.header_content_parag}>{t("header_parag")}</p>
        <div
          className={styles.header_content_btn}
          onClick={() => scrollToElement(`${t("filter_title")}`)}
        >
          <MainButton item={t("header_btn")} width={"50%"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
