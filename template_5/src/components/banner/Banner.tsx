import { FC } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import styles from "./Banner.module.scss";
import BannerSvg from "./assets/banner.svg";

export const scrollToElement = (el: string) => {
  const targetElement = document.getElementById(el);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const Banner: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.banner}>
      <div className={styles.banner_wrapper}>
        <div className={styles.banner_wrapper_content}>
          <div className={styles.banner_wrapper_content_left}>
            <p className={styles.banner_wrapper_content_left_heading}>{t("banner_title")}</p>
            <span className={styles.banner_wrapper_content_left_text}>{t("banner_text")}</span>
            <button
              className={styles.banner_wrapper_content_left_button}
              onClick={() => {
                scrollToElement("schedule");
              }}
            >
              {t("banner_btn")}
            </button>
          </div>
          <div className={styles.banner_wrapper_content_right}>
            <Image
              src={BannerSvg}
              alt="bannerSvg"
              layout="responsive"
              className={styles.banner_wrapper_content_right_image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
