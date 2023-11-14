import { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Reviews.module.scss";
import ReviewBlock from "./ReviewBlock";

const Reviews: FC = () => {
  const { t } = useTranslation();

  const reviewItems = [
    {
      name: `${t("reviews_name1")}`,
      text: `${t("reviews_text1")}`,
    },
    {
      name: `${t("reviews_name2")}`,
      text: `${t("reviews_text2")}`,
    },
    {
      name: `${t("reviews_name3")}`,
      text: `${t("reviews_text3")}`,
    },
  ];

  return (
    <div className={styles.reviews_page}>
      <h1 className={styles.reviews_header}>{t("reviews_title")}</h1>
      <div className={styles.reviews_wrapper}>
        {reviewItems.map((item, index) => (
          <ReviewBlock name={item.name} text={item.text} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
