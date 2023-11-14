"use client";
import styles from "./SliderItem.module.scss";
import { SliderItemProps } from "../../types";
import Image from "next/image";
import { kiteOne } from "../../assets/fonts/fonts";
import { useParams } from "next/navigation";

const SliderItem = ({ image, name, review }: SliderItemProps) => {
    const { locale } = useParams();

    return (
        <div
            className={
                locale === "en" ? styles.sliderItem : styles.sliderItem_he
            }
        >
            <Image src={image} alt={name} />
            <div className={styles.sliderItem__review}>
                <div className={kiteOne.className}>
                    <p className={styles.sliderItem__text}>{review}</p>
                </div>
                <p className={styles.sliderItem__name}>{name}</p>
            </div>
        </div>
    );
};

export default SliderItem;
