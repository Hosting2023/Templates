import React from "react";
import style from "./styles.module.scss";
import Image from "next/image";
import { features } from "./constants/features";
 
function Benefits() {
  return (
    <div className={style.wrapper}>
      <h2>A little about my benefits</h2>

      <div className={style.wrapperGrid}>
        {features.map((feature, index) => (
          <div key={index} className={style.itemWrap}>
            <Image className={style.image} src={feature.icon as unknown as string} alt={""} />
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
