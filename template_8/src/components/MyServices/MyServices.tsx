import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import ArrowSvg from "@/../public/assets/buttons/arrow.svg";
import windowSvg from "@/../public/assets/images/window.svg";
import styles from "./MyServices.module.scss";
import ServicesBlock from "./ServicesBlock";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const MyServices = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:600px)");

  const [positions, setPositions] = useState([1, 2, 3, 4]);
  const [activeIndex, setActiveIndex] = useState(0);

  console.log(activeIndex);

  const onClickPrev = () => {
    setPositions((prevPositions) => prevPositions.map((item) => (item === 1 ? 4 : item - 1)));
  };

  const onClickNext = () => {
    setPositions((prevPositions) => prevPositions.map((item) => (item === 4 ? 1 : item + 1)));
  };

  const services = [
    {
      name: t("services_1_name"),
      text: t("services_1_text"),
      position: positions[0],
    },
    {
      name: t("services_2_name"),
      text: t("services_2_text"),
      position: positions[1],
    },
    {
      name: t("services_3_name"),
      text: t("services_3_text"),
      position: positions[2],
    },
    {
      name: t("services_4_name"),
      text: t("services_4_text"),
      position: positions[3],
    },
  ];

  return (
    <div className={styles.services_page} id={t("nav_services")}>
      <h2 className={styles.services_title}>{t("services_title")}</h2>
      {isMobile ? (
        <div className={styles.services_slider_wrapper}>
          <button
            className={styles.services_btn_prev}
            onClick={() => setActiveIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
          >
            <Image src={ArrowSvg} alt="Slider prev btn" className={styles.services_btn_prev_img} />
          </button>
          <div className={styles.services_slider_slide_mobile}>
            <div className={styles.services_slider_slide_img_wrapper}>
              <Image src={windowSvg} alt="Slide img" className={styles.services_slider_slide_img} />
            </div>
            <div className={styles.services_slider_slide_text_wrapper}>
              <span className={styles.services_slider_slide_text_name}>
                {services[activeIndex]?.name}
              </span>
              <span className={styles.services_slider_slide_text}>
                {services[activeIndex]?.text}
              </span>
            </div>
          </div>
          <button
            className={styles.services_btn_next}
            onClick={() => setActiveIndex(activeIndex + 1)}
            disabled={activeIndex === 3}
          >
            <Image src={ArrowSvg} alt="Slider next btn" className={styles.services_btn_next_img} />
          </button>
        </div>
      ) : (
        <div className={styles.services_slider_wrapper}>
          <button className={styles.services_btn_prev} onClick={() => onClickPrev()}>
            <Image src={ArrowSvg} alt="Slider prev btn" className={styles.services_btn_prev_img} />
          </button>
          <div className={styles.services_slider_slide_1}>
            {services.map((item, index) =>
              item.position === 1 ? (
                <ServicesBlock name={item.name} text={item.text} key={index} />
              ) : (
                ""
              )
            )}
          </div>
          <div className={styles.services_slider_slide_2}>
            {services.map((item, index) =>
              item.position === 2 ? (
                <ServicesBlock name={item.name} text={item.text} key={index} />
              ) : (
                ""
              )
            )}
          </div>
          <div className={styles.services_slider_slide_3}>
            {services.map((item, index) =>
              item.position === 3 ? (
                <ServicesBlock name={item.name} text={item.text} key={index} />
              ) : (
                ""
              )
            )}
          </div>
          <div className={styles.services_slider_slide_4}>
            {services.map((item, index) =>
              item.position === 4 ? (
                <ServicesBlock name={item.name} text={item.text} key={index} />
              ) : (
                ""
              )
            )}
          </div>
          <button className={styles.services_btn_next} onClick={() => onClickNext()}>
            <Image src={ArrowSvg} alt="Slider next btn" className={styles.services_btn_next_img} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MyServices;
