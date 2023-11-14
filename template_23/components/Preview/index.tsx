import React, { RefObject } from "react";
import style from "./styles.module.scss";
import imagePreview from "@/assets/preview/imagePreview.svg";
import previewMobile from "@/assets/preview/previewMobile.svg";
import Image from "next/image";

export interface IFilterProps {
  servicesRef?: RefObject<HTMLDivElement>;
}

function Preview({ servicesRef }: IFilterProps) {
  const handleGoToFilter = () => {
    if (servicesRef && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={style.wrapper}>
      <Image
        className={style.mobile}
        src={previewMobile as unknown as string}
        alt={""}
      />

      <div>
        <h1>
          Let your home shine with <span>cleanliness</span> and freshness!
        </h1>

        <p>
          Free up your time for important moments while I make your home
          perfectly clean.
        </p>

        <div className={style.btn} onClick={handleGoToFilter}>
          go to filter
        </div>
      </div>

      <Image
        className={style.full}
        src={imagePreview as unknown as string}
        alt={""}
      />
    </div>
  );
}

export default Preview;
