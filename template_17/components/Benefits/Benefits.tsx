"use client";
import { useTranslations } from "next-intl";
import BenefitItem from "../BenefitItem/BenefitItem";
import { useParams } from "next/navigation";
import { TranslateType } from "@/types";

import styles from "./Behefits.module.scss";

const Benefits = () => {
    const { locale } = useParams();
    const isEn: boolean = locale === "en";

    const tBenefits = useTranslations("Benefits");
    const benefits: TranslateType = {
        professionalism: tBenefits("professionalism"),
        attention: tBenefits("attention"),
        personalized: tBenefits("personalized"),
        time: tBenefits("time"),
    };
    return (
        <div className={styles.benefits} id="benefits">
            <div className={styles.benefits__container}>
                <div
                    className={
                        isEn
                            ? styles.benefits__container_line1
                            : styles.benefits__container_line1_he
                    }
                >
                    <BenefitItem title={benefits.professionalism} />
                    <BenefitItem title={benefits.attention} />
                </div>
                <div
                    className={
                        isEn
                            ? styles.benefits__container_line2
                            : styles.benefits__container_line2_he
                    }
                >
                    <BenefitItem title={benefits.personalized} />
                    <BenefitItem title={benefits.time} />
                </div>
            </div>
        </div>
    );
};

export default Benefits;
