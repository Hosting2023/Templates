"use client";
import { useTranslations } from "next-intl";
import { TranslateType } from "@/types";
import { useParams } from "next/navigation";
import Image from "next/image";
import Label from "../Label/Label";
import photo from "../../assets/images/girl.png";

import styles from "./About.module.scss";

const About = () => {
    const { locale } = useParams();
    const isEn: boolean = locale === "en";

    const tAbout = useTranslations("About");
    const about: TranslateType = {
        greetings: tAbout("greetings"),
        label: tAbout("label"),
    };

    return (
        <div className={styles.about} id="about">
            <div className={styles.about__container}>
                <div
                    className={
                        isEn ? styles.about__wrapper : styles.about__wrapper_he
                    }
                >
                    <div
                        className={
                            isEn
                                ? styles.about__container_image
                                : styles.about__container_image_he
                        }
                    >
                        <Image src={photo} alt="maria's photo" />
                    </div>
                    <div
                        className={
                            isEn
                                ? styles.about__container_greetings
                                : styles.about__container_greetings_he
                        }
                    >
                        <Label item={about.label} />
                        <h2>
                            {tAbout.rich("title", {
                                br: () => <br />,
                            })}
                        </h2>
                        <p className={styles.about__container_description}>
                            {about.greetings}
                        </p>
                    </div>
                </div>
                <p className={styles.about__container_description_mobile}>
                    {about.greetings}
                </p>
                <p className={styles.about__content}>
                    {tAbout.rich("text", {
                        br: () => <br />,
                    })}
                </p>
            </div>
        </div>
    );
};

export default About;
