import SwiperCore from 'swiper';

interface IUseSwiperProps {
  swiperRef: React.MutableRefObject<SwiperCore | null>;
  isYear: boolean;
  swiper: SwiperCore;
}

export const onSlideChange = ({
  swiperRef,
  isYear,
  swiper,
}: IUseSwiperProps) => {
  let currentValue = 0;

  if (isYear && swiperRef.current && swiperRef.current.slides) {
    currentValue = parseInt(
      swiperRef.current.slides[swiper.activeIndex]!.textContent ||
        new Date().getFullYear.toString(),
    );
  } else {
    currentValue = swiper.realIndex + 1;
  }

  return currentValue;
};
