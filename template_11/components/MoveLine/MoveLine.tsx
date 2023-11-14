import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import arrow from '@/public/arrow-down.svg';
import styles from './MoveLine.module.scss';

interface MoveLimeProps {
   word: string;
}

const MoveLine: React.FC<MoveLimeProps> = ({ word }) => {
   return (
      <div className={styles.marqueeContainer}>
         <Marquee
            autoFill={true}
         >
            <div className={styles.marqueeItem}>
               <span className={styles.word}>{word}</span>
               <Image src={arrow} alt="Arrow" className={styles.arrow} />
            </div>
         </Marquee>
      </div>
   );
};

export default MoveLine;
