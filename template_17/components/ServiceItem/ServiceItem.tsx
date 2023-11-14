import Image from "next/image";
import { ServiceItemProps } from "@/types";

import styles from "./ServiceItem.module.scss";

const ServiceItem = ({ imageSrc, title, text, cleaning }: ServiceItemProps) => {
    return (
        <div className={styles.serviceItem}>
            <div className={styles.serviceItem__wrapper}>
                <Image
                    src={imageSrc}
                    alt={title}
                    className={styles.serviceItem__image}
                />
            </div>
            <p className={styles.serviceItem__title}>
                {cleaning && (
                    <span className={styles.serviceItem__content}>
                        {cleaning}
                    </span>
                )}
                {title}
                <span className={styles.serviceItem__content}>{text}</span>
            </p>
        </div>
    );
};

export default ServiceItem;
