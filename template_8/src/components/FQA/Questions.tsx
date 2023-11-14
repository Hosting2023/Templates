import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Questions.module.scss";

const Questions = () => {
  const { t } = useTranslation();

  const questions = [
    {
      question: t("questions_q1"),
      answer: t("questions_q1_answer"),
    },
    {
      question: t("questions_q2"),
      answer: t("questions_q2_answer"),
    },
    {
      question: t("questions_q3"),
      answer: t("questions_q3_answer"),
    },
    {
      question: t("questions_q4"),
      answer: t("questions_q4_answer"),
    },
    {
      question: t("questions_q5"),
      answer: t("questions_q5_answer"),
    },
  ];

  return (
    <div className={styles.questions_page}>
      <h2 className={styles.questions_title}>{t("questions_title")}</h2>
      <div className={styles.questions_content}>
        {questions.map((item, index) => (
          <div className={styles.questions_content_block} key={index}>
            <span className={styles.questions_qText}>{item.question}</span>
            <span className={styles.questions_aText}>{item.answer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
