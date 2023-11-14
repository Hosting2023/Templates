import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import { ImageInfos } from '@/components/Services/constants/imageInfos';

const Services: FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  console.log(hoveredImage);

  const handleImageHover = (index: number) => {
    setHoveredImage(index);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className={styles.container}>
      {ImageInfos.map((imageInfo, index) => (
        <div
          className={styles.column}
          key={index}
        >
          <div
            className={`${imageInfo.className} ${styles.image}`}
            onMouseEnter={() => handleImageHover(index + 1)}
            onMouseLeave={handleImageLeave}
          >
            {/*{hoveredImage === index + 1 && (*/}
            {/*  <div className={styles.containerImageText}>*/}
            {/*    <div className={styles.imageText}>*/}
            {/*      <h3>{imageInfo.title}</h3>*/}
            {/*      <p>{imageInfo.text}</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*)}*/}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
