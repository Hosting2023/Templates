"use client";
import { useTranslations } from "next-intl";
import { TranslateType } from "@/types";
import FaqItem from "../FaqItem/FaqItem";
import { useParams } from "next/navigation";

import styles from "./Faq.module.scss";
import Label from "../Label/Label";

const Faq = () => {
    const { locale } = useParams();
    const isEn: boolean = locale === "en";

    const tFaq = useTranslations("Faq");
    const faqData: TranslateType = {
        faq: tFaq("faq"),
        label: tFaq("label"),
        q1: tFaq("ques1.q"),
        q11: tFaq("ques1.q1"),
        q12: tFaq("ques1.q2"),
        a1: tFaq("ques1.a"),
        q21: tFaq("ques2.q1"),
        q22: tFaq("ques2.q2"),
        a2: tFaq("ques2.a"),
        q31: tFaq("ques3.q1"),
        q32: tFaq("ques3.q2"),
        a3: tFaq("ques3.a"),
        q4: tFaq("ques4.q"),
        q41: tFaq("ques4.q1"),
        q42: tFaq("ques4.q2"),
        a4: tFaq("ques4.a"),
    };

    return (
        <div id="questions" className={styles.faq}>
            <div className={styles.faq__container}>
                <div
                    className={isEn ? styles.faq__label : styles.faq__label_he}
                >
                    <Label item={faqData.label} />
                </div>
                <h2 className={isEn ? styles.faq__title : styles.faq__title_he}>
                    {faqData.faq}
                </h2>
                <FaqItem
                    q={faqData.q1}
                    q1={faqData.q11}
                    q2={faqData.q12}
                    a={faqData.a1}
                />
                <FaqItem q1={faqData.q21} q2={faqData.q22} a={faqData.a2} />
                <FaqItem q1={faqData.q31} q2={faqData.q32} a={faqData.a3} />
                <FaqItem
                    q={faqData.q4}
                    q1={faqData.q41}
                    q2={faqData.q42}
                    a={faqData.a4}
                />
            </div>
        </div>
    );
};

export default Faq;
