import { FC } from 'react';
import Image from 'next/image';

import styles from './Pros.module.scss';
import QualitySvg from './assets/quality.svg';
import TimeSvg from './assets/time.svg';
import ScheduleSvg from './assets/schedule.svg';

interface ProsItemProps {
  image: string;
  mainText: string;
  text: string;
}

const ProsItem: FC<ProsItemProps> = ({ image, mainText, text }) => {
  return (
    <div className={styles.prosItem_wrapper}>
      <Image
        src={
          image === 'quality'
            ? QualitySvg
            : image === 'schedule'
            ? ScheduleSvg
            : image === 'time'
            ? TimeSvg
            : ''
        }
        alt="qualitySvg"
        className={styles.prosItem_img}
      />
      <span className={styles.prosItem_main_text}>{mainText}</span>
      <span className={styles.prosItem_text}>{text}</span>
    </div>
  );
};

export default ProsItem;
