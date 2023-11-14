import Image from 'next/image';
import React, { FC } from 'react';

import styles from './MyServices.module.scss';
import regularSvg from '@/../public/assets/images/regular.svg';
import windowSvg from '@/../public/assets/images/window.svg';

interface ServicesBlockProps {
  name: string;
  text: string;
}

const ServicesBlock: FC<ServicesBlockProps> = ({ name, text }) => {
  return (
    <>
      <div className={styles.services_slider_slide_img_wrapper}>
        <Image
          src={
            name === 'window cleaning' || name === 'after repairing'
              ? windowSvg
              : regularSvg
          }
          alt="Slide img"
          className={styles.services_slider_slide_img}
        />
      </div>
      <div className={styles.services_slider_slide_text_wrapper}>
        <span className={styles.services_slider_slide_text_name}>{name}</span>
        <span className={styles.services_slider_slide_text}>{text}</span>
      </div>
    </>
  );
};

export default ServicesBlock;
