import React, { FC, useContext, useState } from 'react';
import styles from './styles.module.scss';
import {
  INFO_DATA,
  INFO_DATA_HEB,
} from '@/components/info/constants/contentInfo';
import { AppContext } from '../../pages/_app';

const Info: FC = () => {
  const Heb = useContext(AppContext);
  const testimonials = Heb ? INFO_DATA_HEB : INFO_DATA;

  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleTestimonial = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div className={styles.testimonialsContainer}>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={styles.testimonial}
        >
          <h2
            className={styles.testimonialTitle}
            onClick={() => toggleTestimonial(index)}
          >
            {testimonial.title}
          </h2>
          {activeIndexes.includes(index) && (
            <p className={styles.testimonialText}>{testimonial.text}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Info;
