import { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Card.module.scss";

const Card: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_wrapper_lines}>
        {[...Array(5)].map((i, idx) => (
          <div id={i} key={idx}></div>
        ))}
      </div>
      <div className={styles.card_text}>
        <p className={styles.card_text_top}>{t("card_text_top")}</p>
        <p className={styles.card_text_bottom}>{t("card_text_bottom")}</p>
      </div>
    </div>
  );
};

export default Card;
