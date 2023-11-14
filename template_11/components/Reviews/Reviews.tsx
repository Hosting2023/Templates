import { FC } from "react";
import styles from "./Reviews.module.scss";
import Slider from "../Slider/Slider";
import { sliders } from "@/assets/main";
import Image from "next/image";

const Reviews: FC = () => {
  return (
    <div className={styles.reviews}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.reviews_content}>
          <Slider
            slides={sliders}
            renderSlide={(slide: any) => (
              <div key={slide.id_slide} className={styles.slide_content}>
                {slide.sliders.map((item: any) => (
                  <div className={styles.slide} key={item.id}>
                    <div className={styles.img_and_name}>
                      <Image
                        src={item.img.src}
                        alt={item.img.src}
                        width={140}
                        height={140}
                        className={styles.slider_image}
                      />
                      <div className={styles.name}>{item.name}</div>
                    </div>
                    <div className={styles.text}>{item.description}</div>
                  </div>
                ))}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};
export default Reviews;
