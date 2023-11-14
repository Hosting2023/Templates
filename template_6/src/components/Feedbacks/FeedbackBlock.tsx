import React, { FC } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import styles from "./Feedbacks.module.scss";
import ashleySvg from "./assets/ashley.svg";
import frankSvg from "./assets/frank.svg";

interface FeedbackBlockProps {
  name?: string;
  text?: string;
}

const FeedbackBlock: FC<FeedbackBlockProps> = ({ name, text }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.fb_block}>
      <div className={styles.fb_block_image_wrapper}>
        <Image
          src={
            name === `${t("fb_name1")}` ? ashleySvg : name === `${t("fb_name2")}` ? frankSvg : ""
          }
          alt={"Person img"}
          className={styles.fb_block_image}
          quality={100}
          loading="eager"
        />
      </div>
      <span className={styles.fb_block_quotes}>❞</span>
      <div className={styles.fb_block_right}>
        <span className={styles.fb_block_text}>{text}</span>
        <span className={styles.fb_block_name}>{name}</span>
      </div>
    </div>
  );
};

export default FeedbackBlock;
