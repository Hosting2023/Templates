import React, { FC, useEffect, useState } from 'react';
import SwiperCore, { Mousewheel, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { datePickerStartYear } from '../constants/datePickerStartYear';

import { onSlideChange } from './helpers/onSlideChange';
import { getClassNamesSwiper, getClassNamesSwiperSlider } from './config';

import 'swiper/swiper.min.css';
import styles from './styles.module.scss';

SwiperCore.use([Navigation]);

interface ISwiperPickerProps {
  slides: Array<string | number>;
  currentValue: number;
  swiperRef: React.MutableRefObject<SwiperCore | null>;
  isSmall: boolean;
  paddingLeft?: boolean;
  paddingRight?: boolean;
  isMonth?: boolean;
  isYear?: boolean;
  monthIndexes?: Array<number>;
  handleChange: (value: number) => void;
}

const SwiperPicker: FC<ISwiperPickerProps> = ({
  slides,
  currentValue,
  swiperRef,
  isSmall,
  paddingLeft = false,
  paddingRight = false,
  isMonth = false,
  isYear = false,
  monthIndexes = [],
  handleChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<number>(currentValue);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(selectedValue - 1, 0, false);

      if (isYear && swiperRef.current && swiperRef.current.slides) {
        const yearIndex = selectedValue - datePickerStartYear;
        swiperRef.current.slideToLoop(yearIndex, 0, false);
      }
    }
  }, []);

  return (
    <div className={styles.datePickerSection}>
      <Swiper
        direction="vertical"
        slidesPerView={5}
        centeredSlides
        loop
        navigation
        mousewheel
        modules={[Mousewheel]}
        speed={10}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          const currentValue = onSlideChange({ swiperRef, isYear, swiper });

          setSelectedValue(currentValue);
          handleChange(currentValue);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            className={getClassNamesSwiperSlider({ isMonth, isYear, isSmall })}
            key={index}
          >
            <div
              className={getClassNamesSwiper({
                index: isMonth ? index + 1 : index,
                data: isMonth ? monthIndexes : (slides as number[]),
                selectedValue,
                paddingLeft,
                paddingRight,
              })}
              onClick={() =>
                handleChange(isMonth ? index + 1 : (slide as number))
              }
            >
              {slide}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperPicker;
