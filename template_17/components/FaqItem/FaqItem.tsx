"use client";
import { FaqItemProps } from "@/types";
import { useParams } from "next/navigation";
import { kiteOne } from "../../assets/fonts/fonts";

import styles from "./FaqItem.module.scss";

const FaqItem = ({ q, q1, q2, a }: FaqItemProps) => {
    const { locale } = useParams();

    return (
        <div className={styles.faqItem}>
            <div className={styles.faqItem__wrapper}>
                <div className={styles.faqItem__square}></div>
                <div className={styles.faqItem__q}>
                    <p
                        className={
                            locale === "en"
                                ? styles.faqItem__question
                                : styles.faqItem__question_he
                        }
                    >
                        {!q ? (
                            <>
                                <span>{q1}</span>
                                <br />
                                <span>{q2}</span>
                            </>
                        ) : (
                            <span>{q}</span>
                        )}
                    </p>
                </div>
                <div className={styles.faqItem__q_mobile}>
                    <p
                        className={
                            locale === "en"
                                ? styles.faqItem__question
                                : styles.faqItem__question_he
                        }
                    >
                        <span>{q1}</span>
                        <br />
                        {q2 && <span>{q2}</span>}
                    </p>
                </div>
            </div>
            <div className={styles.faqItem__answer}>
                <span className={kiteOne.className}>{a}</span>
            </div>
        </div>
    );
};

export default FaqItem;
