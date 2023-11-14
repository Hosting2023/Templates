import React, { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

import Modal from "../../components/Modal/Modal";
import styles from "./NavModal.module.scss";

interface NavModalProps {
  setModalOpened: Dispatch<SetStateAction<boolean>>;
}

const NavModal: FC<NavModalProps> = ({ setModalOpened }) => {
  const { t } = useTranslation();

  const navItems = [
    `${t("nav_services")}`,
    `${t("nav_about")}`,
    `${t("nav_filter")}`,
    `${t("nav_schedule")}`,
    `${t("nav_feedbacks")}`,
    `${t("nav_contact")}`,
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
          {navItems.map((item, idx) => (
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
