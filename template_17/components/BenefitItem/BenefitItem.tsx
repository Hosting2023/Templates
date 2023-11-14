import { BenefitItemProps } from "@/types";
import { useParams } from "next/navigation";

import styles from "./BenefitItem.module.scss";

const BenefitItem = ({ title }: BenefitItemProps) => {
    const { locale } = useParams();

    return (
        <div className={styles.benefitItem}>
            <div className={styles.benefitItem__square}></div>
            <h2
                className={
                    locale === "en"
                        ? styles.benefitItem__title
                        : styles.benefitItem__title_he
                }
            >
                {title}
            </h2>
        </div>
    );
};

export default BenefitItem;
