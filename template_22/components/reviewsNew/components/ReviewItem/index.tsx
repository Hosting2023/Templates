import React from 'react';
import styles from './styles.module.scss';

interface ReviewItemProps {
  imageSrc: string;
  name: string;
  review: string;
  opacity?: boolean;
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  imageSrc,
  name,
  review,
  opacity = false,
}) => (
  <div className={opacity ? `${styles.review} ${styles.minor}` : styles.review}>
    <div className={styles.image}>
      <img
        src={imageSrc}
        alt={name}
      />
    </div>
    <div className={styles.text}>
      <h3>{name}</h3>
      <p>{review}</p>
    </div>
  </div>
);

export default ReviewItem;
