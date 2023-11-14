import React, { Dispatch, FC } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import styles from "./Feedbacks.module.scss";
import anthonySvg from "@/public/assets/reviews/anthony.svg";
import rosaSvg from "@/public/assets/reviews/rosa.svg";
// import margaretSvg from '@/public/assets/reviews/margaret.svg';

interface FeedbackBlockProps {
  name: string;
  text: string;
  active: boolean;
  setActivePerson: Dispatch<React.SetStateAction<number>>;
  blockNum: number;
}

const FeedbackBlock: FC<FeedbackBlockProps> = ({
  name,
  text,
  active,
  setActivePerson,
  blockNum,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={active ? styles.fb_block_active : styles.fb_block}
      onClick={() => setActivePerson(blockNum)}
    >
      <div
        className={styles.fb_block_left}
        style={i18n.language === "he" ? { marginLeft: "7%" } : { marginRight: "7%" }}
      >
        <Image
          src={
            name === t("fb_name1")
              ? anthonySvg
              : name === t("fb_name2")
              ? rosaSvg
              : name === t("fb_name3")
              ? rosaSvg
              : ""
          }
          alt={"Person img"}
          className={styles.fb_block_left_img}
        />
      </div>
      <div className={styles.fb_block_right}>
        <span className={styles.fb_block_right_name}>{name}</span>
        <span className={styles.fb_block_right_text}>{text}</span>
      </div>
    </div>
  );
};

export default FeedbackBlock;
