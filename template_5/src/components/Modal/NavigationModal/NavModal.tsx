import React, { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../Modal";

import styles from "./NavModal.module.scss";

interface NavModalProps {
  setModalOpened: Dispatch<SetStateAction<boolean>>;
}

const NavModal: FC<NavModalProps> = ({ setModalOpened }) => {
  const { t } = useTranslation();

  const listItems = [
    `${t("nav_services")}`,
    `${t("nav_reviews")}`,
    `${t("nav_faq")}`,
    `${t("nav_filter")}`,
    `${t("nav_tips")}`,
    `${t("nav_contacts")}`,
  ];
  return (
    <Modal setModalOpened={setModalOpened}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={() => {
            setModalOpened(false);
          }}
        >
          {[...Array(3)].map((i, idx) => (
            <div id={i} key={idx}></div>
          ))}
        </button>
        <div className={styles.nav_wrapper}>
          {listItems.map((item, idx) => (
            <span key={idx} className={styles.nav_text}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default NavModal;
