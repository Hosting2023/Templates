"use client";
import React, { useState } from "react";
import style from "./styles.module.scss";
import { feedbackData, imagePaths } from "./constants/feedbackData";
import Image from "next/image";
import left from "@/assets/photos/left.svg";
import right from "@/assets/photos/right.svg";

function Feedback() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(1);

  const handleArrowClick = (increment: number) => {
    setCurrentIndex1(
      (prevIndex1) => (prevIndex1 + increment) % feedbackData.length
    );
    setCurrentIndex2(
      (prevIndex2) => (prevIndex2 + increment) % feedbackData.length
    );
  };

  return (
    <div className={style.wrapper}>
      <h2>Positive feedback from regular customers</h2>

      <div className={style.containerPeople}>
        <div className={style.people}>
          {imagePaths.map((img, index) => (
            <Image
              key={index}
              className={style[`img${index + 1}`]}
              src={img}
              alt=""
            />
          ))}
        </div>

        <div className={style.containerFeedback}>
          <Image
            className={style.arrow}
            onClick={() => handleArrowClick(-2)}
            src={left}
            alt=""
          />
          <div className={style.feedback}>
            {[currentIndex1, currentIndex2].map((currentIndex, index) => (
              <div key={index}>
                <Image
                  className={style.photos}
                  src={feedbackData[currentIndex].icon as unknown as string}
                  alt=""
                />
                <h3>{feedbackData[currentIndex].name}</h3>
                <p>{feedbackData[currentIndex].text}</p>
              </div>
            ))}
          </div>
          <Image
            className={style.arrow}
            onClick={() => handleArrowClick(2)}
            src={right}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
