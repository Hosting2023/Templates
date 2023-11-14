"use client";
import { useTranslations } from "next-intl";
import { TranslateType } from "@/types";
import Image from "next/image";
import equipment from "../../assets/images/equipment.png";
import { useParams } from "next/navigation";
import { kiteOne } from "../../assets/fonts/fonts";

import styles from "./Ad.module.scss";

const Ad = () => {
    const { locale } = useParams();
    const isEn: boolean = locale === "en";

    const tAd = useTranslations("ad");
    const ad: TranslateType = {
        free: tAd("free"),
        willCreate: tAd("willCreate"),
        soThat: tAd("soThat"),
        dontDelay: tAd("dontDelay"),
    };

    return (
        <div className={locale === "en" ? styles.ad : styles.ad_he}>
            <div className={styles.ad__container}>
                {isEn ? (
                    <div className={styles.ad__container_text}>
                        <span className={kiteOne.className}>{ad.free}</span>
                        <span className={styles.ad__container_p}>
                            {ad.willCreate}
                        </span>
                        <span className={kiteOne.className}>{ad.soThat}</span>
                    </div>
                ) : (
                    <p className={styles.ad__container_text}>{ad.free}</p>
                )}
                <div
                    className={
                        isEn ? styles.ad__wrapper : styles.ad__wrapper_he
                    }
                >
                    <p className={styles.ad__container_content}>
                        {ad.dontDelay}
                    </p>
                    <Image src={equipment} alt="equipment" />
                </div>
            </div>
        </div>
    );
};

export default Ad;
