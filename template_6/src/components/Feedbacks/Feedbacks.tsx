import React, { FC, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import styles from "./Feedbacks.module.scss";
import FeedbackBlock from "./FeedbackBlock";
import arrowSvg from "./assets/arrow.svg";

interface FeedbacksProps {}

const Feedbacks: FC<FeedbacksProps> = () => {
  const { t } = useTranslation();
  const [activePerson, setActivePerson] = useState(0);

  const feedbacks = [
    {
      name: `${t("fb_name1")}`,
      text: `${t("fb_text1")}`,
    },
    {
      name: `${t("fb_name2")}`,
      text: `${t("fb_text2")}`,
    },
  ];

  return (
    <div className={styles.fb_page} id={t("nav_feedbacks")}>
      <div className={styles.fb_content}>
        <div className={styles.fb_content_left}>
          <h1 className={styles.fb_content_left_header}>{t("fb_title")}</h1>
          <p className={styles.fb_content_left_text}>{t("fb_parag")}</p>
        </div>
        <div className={styles.fb_content_right}>
          <FeedbackBlock
            name={feedbacks[activePerson]?.name}
            text={feedbacks[activePerson]?.text}
          />
          <div className={styles.fb_arrow_wrapper}>
            <button
              className={styles.fb_arrow_btn}
              onClick={() => {
                activePerson === 0 ? setActivePerson(1) : setActivePerson(0);
              }}
            >
              <Image src={arrowSvg} alt="Arrow" className={styles.fb_arrow} />
            </button>
            <button
              className={styles.fb_arrow_btn}
              onClick={() => {
                activePerson === 0 ? setActivePerson(1) : setActivePerson(0);
              }}
            >
              <Image src={arrowSvg} alt="Arrow" className={styles.fb_arrow_reverse} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
