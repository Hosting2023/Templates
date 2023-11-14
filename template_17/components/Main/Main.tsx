import { TranslateType } from "@/types";
import { useTranslations } from "next-intl";
import { kiteOne } from "../../assets/fonts/fonts";

import styles from "./Main.module.scss";

const Main = () => {
    const tMain = useTranslations("main");
    const main: TranslateType = {
        title: tMain("title"),
        tagline: tMain("tagline"),
        text: tMain("text"),
        order: tMain("order"),
    };

    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                <h1 className={styles.main__container_title}>{main.title}</h1>
                <div className={kiteOne.className}>
                    <p className={styles.main__container_tagline}>
                        {main.tagline}
                    </p>
                </div>
                <p className={styles.main__container_text}>{main.text}</p>
                <button className={styles.main__container_button}>
                    {main.order}
                </button>
            </div>
        </div>
    );
};

export default Main;
