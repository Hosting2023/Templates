import React, { FC, useContext } from 'react';
import styles from './styles.module.scss';
import { MOCK_BENEFITS_DATA } from '@/components/benefits/constants/benefitsData';
import { StaticImageData } from 'next/image';
import { AppContext } from '../../pages/_app';
import { MOCK_BENEFITS_DATA_HEB } from '@/components/benefits/constants/benefitsDataHeb';

export interface ColumnData {
  imageSrc: StaticImageData;
  title: string;
  text: string;
}

const Benefits: FC = () => {
  const Heb = useContext(AppContext);
  const data = Heb ? MOCK_BENEFITS_DATA_HEB : MOCK_BENEFITS_DATA;
  return (
    <div className={styles.columns}>
      {data.map((column, index) => (
        <div
          className={styles.column}
          key={index}
        >
          <div className={styles.imageContainer}>
            <img
              src={column.imageSrc.src as unknown as string}
              alt={column.title}
            />
          </div>
          <h3 className={styles.title}>{column.title}</h3>
          <p className={styles.text}>{column.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
