"use client";
import { TranslateType } from "@/types";
import { useTranslations } from "next-intl";
import SliderItem from "../SliderItem/SliderItem";
import styles from "./Slider.module.scss";
import Label from "../Label/Label";
import { useParams } from "next/navigation";
import { sliderImages } from "../Slider/images";

const Slider = () => {
    const { locale } = useParams();
    const isEn: boolean = locale === "en";

    const tSlider = useTranslations("Reviews");
    const slider: TranslateType = {
        reviews: tSlider("reviews"),
        button: tSlider("button"),
        emilyName: tSlider("emily.name"),
        emilyReview: tSlider("emily.review"),
        johnName: tSlider("john.name"),
        johnReview: tSlider("john.review"),
        ireneName: tSlider("irene.name"),
        ireneReview: tSlider("irene.review"),
    };

    return (
        <div>
            <div id="reviews" className={styles.slider}>
                <div
                    className={
                        isEn
                            ? styles.slider__reviews
                            : styles.slider__reviews_he
                    }
                >
                    <Label item={slider.reviews} />
                </div>
                <div className={styles.slider__container}>
                    <div
                        className={
                            isEn
                                ? styles.slider__container_inner
                                : styles.slider__container_inner_he
                        }
                    >
                        <div
                            className={
                                isEn
                                    ? styles.slider__container_item
                                    : styles.slider__container_item_he
                            }
                        >
                            <div className={styles.lider__container_block}>
                                <SliderItem
                                    image={sliderImages[0]}
                                    name={slider.emilyName}
                                    review={slider.emilyReview}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                isEn
                                    ? styles.slider__container_item
                                    : styles.slider__container_item_he
                            }
                        >
                            <div className={styles.slider__container_block}>
                                <SliderItem
                                    image={sliderImages[1]}
                                    name={slider.johnName}
                                    review={slider.johnReview}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                isEn
                                    ? styles.slider__container_item
                                    : styles.slider__container_item_he
                            }
                        >
                            <div className={styles.slider__container_block}>
                                <SliderItem
                                    image={sliderImages[2]}
                                    name={slider.ireneName}
                                    review={slider.ireneReview}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.slider__btn}>{slider.button}</button>
            </div>
        </div>
    );
};

export default Slider;
