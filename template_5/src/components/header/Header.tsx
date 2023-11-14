import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Header.module.scss";
import NavBar from "../navigation/NavBar";
import NavModal from "../Modal/NavigationModal/NavModal";

const Header: FC = () => {
  const { t, i18n } = useTranslation();
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  return (
    <div className={styles.header_wrapper}>
      <button
        className={styles.header_navigation_btn}
        onClick={() => {
          setModalOpened(true);
        }}
      >
        {[...Array(3)].map((i, idx) => (
          <div id={i} key={idx}></div>
        ))}
      </button>
      <header className={styles.header_wrapper_top_text}>{t("header_title")}</header>
      <div
        className={styles.content}
        style={i18n.language === "he" ? { marginLeft: "20%" } : { marginLeft: "5%" }}
      >
        <NavBar />
        <p
          className={styles.content_text}
          style={i18n.language === "he" ? { paddingRight: 0 } : { paddingRight: "5%" }}
        >
          {t("header_parag")}
        </p>
      </div>
      {modalOpened ? <NavModal setModalOpened={setModalOpened} /> : ""}
    </div>
  );
};

export default Header;
