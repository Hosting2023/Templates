import React, { FC, useContext, useState } from 'react';
import styles from './styles.module.scss';
import {
  reviewsData,
  reviewsDataHeb,
} from '@/components/reviewsNew/constants/reviewsData';
import ReviewsSmall from '@/components/reviewsNew/components';
import ReviewItem from './components/ReviewItem';
import { AppContext } from '../../pages/_app';

const Reviews: FC = () => {
  const Heb = useContext(AppContext);
  const [activePage, setActivePage] = useState<number>(0);
  const data = Heb ? reviewsDataHeb : reviewsData;
  const itemsPerPage = 3;
  const startIndex = activePage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  return (
    <div className={styles.container}>
      <div className={styles.reviewsContainer}>
        <h2 className={styles.reviewsTitle}>
          {Heb ? 'חוות דעת של לקוחות' : 'Customer reviews'}
        </h2>
        <div className={styles.reviews}>
          {data.slice(startIndex, endIndex).map((review, index) => (
            <ReviewItem
              key={index}
              imageSrc={review.imageSrc.src}
              name={review.name}
              review={review.review}
            />
          ))}
        </div>
      </div>
      <div className={styles.pagination}>
        {Array.from({
          length: Math.ceil(reviewsData.length / itemsPerPage),
        }).map((_, index) => (
          <div
            key={index}
            className={`${styles.pageIndicator} ${
              activePage === index ? styles.active : ''
            }`}
            onClick={() => handlePageChange(index)}
          />
        ))}
      </div>
      <ReviewsSmall />
    </div>
  );
};

export default Reviews;
