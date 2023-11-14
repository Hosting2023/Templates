"use client";
import React, { useState } from "react";
import style from "./styles.module.scss";
import { questionContent } from "./constants/questionContent";
import Image from "next/image";
import bi_stars from "@/assets/iconsStars/bi_stars.svg";
import starsBelow from "@/assets/iconsStars/starsBelow.svg";

function Questions() {
  const [paragraphVisibility, setParagraphVisibility] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleParagraph = (index: number) => {
    setParagraphVisibility((prevVisibility) => ({
      ...prevVisibility,
      [index]: !prevVisibility[index],
    }));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.titleWrap}>
        <Image src={bi_stars as unknown as string} alt={""} />
        <h2>Questions you may have</h2>
      </div>

      <div className={style.containerQuetions}>
        {questionContent.map((content, index) => (
          <div className={style.item} key={index}>
            <div className={style.btn} onClick={() => toggleParagraph(index)}>
              {content.question}
            </div>
            <p hidden={!paragraphVisibility[index]}>{content.answer}</p>
          </div>
        ))}
      </div>
      <Image
        className={style.image}
        src={starsBelow as unknown as string}
        alt={""}
      />
    </div>
  );
}

export default Questions;
