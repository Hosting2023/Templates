import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import styles from "./Reviews.module.scss";
import arrowSvg from "@/../public/assets/buttons/arrow.svg";
import aliceSvg from "@/../public/assets/images/alice.svg";
import richardSvg from "@/../public/assets/images/richard.svg";
import marySvg from "@/../public/assets/images/mary.svg";
import curtisSvg from "@/../public/assets/images/curtis.svg";
import starSvg from "@/../public/assets/images/star.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Reviews = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = useMediaQuery("(max-width:600px)");

  const reviews = [
    {
      name: t("reviews_1_name"),
      text: t("reviews_1_text"),
    },
    {
      name: t("reviews_2_name"),
      text: t("reviews_2_text"),
    },
    {
      name: t("reviews_3_name"),
      text: t("reviews_3_text"),
    },
    {
      name: t("reviews_4_name"),
      text: t("reviews_4_text"),
    },
  ];

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 2 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex >= reviews.length - 2 ? 0 : prevIndex + 1));
  };

  const renderCarouselItems = () => {
    const activeItems = isMobile
      ? reviews.slice(activeIndex, activeIndex + 1)
      : reviews.slice(activeIndex, activeIndex + 2);

    return activeItems.map((item, index) => (
      <div
        key={index}
        // className={
        //   isMobile ? styles.reviews_block_mobile : styles.reviews_block
        // }
        className={styles.reviews_block}
      >
        <Image
          src={
            item.name === t("reviews_1_name")
              ? aliceSvg
              : item.name === t("reviews_2_name")
              ? richardSvg
              : item.name === t("reviews_3_name")
              ? marySvg
              : item.name === t("reviews_4_name")
              ? curtisSvg
              : ""
          }
          alt={"Person img"}
          className={styles.reviews_block_img}
        />
        <span className={styles.reviews_block_name}>{item.name}</span>
        <span className={styles.reviews_block_text}>{item.text}</span>
        <div className={styles.reviews_block_star_wrapper}>
          {[...Array(5)].map((i, idx) => (
            <Image
              id={i}
              key={idx}
              className={styles.reviews_block_star}
              src={starSvg}
              alt={"Star img"}
            ></Image>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.reviews_page}>
      <h2 className={styles.reviews_title}>{t("reviews_title")}</h2>

      <div className={styles.reviews_content}>
        <button
          // onClick={() => (activeIndex != 0 ? handlePrevSlide() : '')}
          onClick={() => handlePrevSlide()}
          disabled={activeIndex === 0}
          className={styles.reviews_btn}
        >
          <Image src={arrowSvg} alt={"Arrow left"} className={styles.reviews_btn_img} fill={true} />
        </button>
        {renderCarouselItems()}
        <button
          onClick={() => handleNextSlide()}
          disabled={activeIndex === 2}
          className={styles.reviews_btn_right}
        >
          <Image
            src={arrowSvg}
            alt={"Arrow right"}
            className={styles.reviews_btn_img}
            fill={true}
          />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
