import React, { useContext, useState } from 'react';
import styles from './styles.module.scss';
import ReviewItem from '@/components/reviewsNew/components/ReviewItem';
import {
  reviewsData,
  reviewsDataHeb,
} from './ReviewItem/constants/reviewsData';
import { AppContext } from '../../../pages/_app';

export const ReviewsSmall: React.FC = () => {
  const Heb = useContext(AppContext);
  const [activeItem, setActiveItem] = useState<number>(1);

  const data = Heb ? reviewsDataHeb : reviewsData;

  const handlePhotoChange = (newIndex: number) => {
    setActiveItem(newIndex);
  };

  return (
    <div className={styles.photoViewer}>
      <div className={styles.photoContainer}>
        {activeItem > 0 && (
          <ReviewItem
            key={activeItem - 1}
            imageSrc={data[activeItem - 1]?.imageSrc?.src || ''}
            name={data[activeItem - 1]?.name || ''}
            review={data[activeItem - 1]?.review || ''}
            opacity={true}
          />
        )}
        <ReviewItem
          key={activeItem}
          imageSrc={data[activeItem]?.imageSrc?.src || ''}
          name={data[activeItem]?.name || ''}
          review={data[activeItem]?.review || ''}
        />
        {activeItem < data.length - 1 && (
          <ReviewItem
            key={activeItem + 1}
            imageSrc={data[activeItem + 1]?.imageSrc?.src || ''}
            name={data[activeItem + 1]?.name || ''}
            review={data[activeItem + 1]?.review || ''}
            opacity={true}
          />
        )}
      </div>
      <div className={styles.pagination}>
        {Array.from({
          length: Math.ceil(data.length),
        }).map((_, index) => (
          <div
            key={index}
            className={`${styles.pageIndicator} ${
              activeItem === index ? styles.active : ''
            }`}
            onClick={() => handlePhotoChange(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default ReviewsSmall;
