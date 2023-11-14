import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import styles from "./Header.module.scss";
import NavBar, { scrollToElement } from "../NavBar/NavBar";
import bgSvg from "./assets/bg.svg";
import NavModal from "@/modals/NavModal/NavModal";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { t, i18n } = useTranslation();
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  return (
    <div className={styles.header_page}>
      <div className={i18n.language === "he" ? styles.header_name_hebrew : styles.header_name}>
        {t("header_title")}
      </div>
      <NavBar />
      <div className={styles.header_content}>
        <Image src={bgSvg} alt="header bg" className={styles.header_content_bg}></Image>
        <div
          className={styles.header_content_left}
          style={i18n.language === "he" ? { marginRight: "10%" } : { marginLeft: "10%" }}
        >
          <span className={styles.header_content_left_text}>{t("header_parag")}</span>
          <button
            className={styles.header_content_left_btn}
            onClick={() => {
              scrollToElement("Filter");
            }}
          >
            {t("header_btn")}
          </button>
        </div>
      </div>
      <button
        className={styles.header_navBtn}
        onClick={() => {
          setModalOpened(true);
        }}
      >
        {[...Array(3)].map((i, idx) => (
          <div id={i} key={idx}></div>
        ))}
      </button>
      {modalOpened ? <NavModal setModalOpened={setModalOpened} /> : ""}
    </div>
  );
};

export default Header;
