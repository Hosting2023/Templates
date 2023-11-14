import React, { FC, useState, useEffect } from 'react';
import styles from './Schedule.module.scss';
import Image from 'next/image';
import reviews from "@/public/reviews.svg"

const Schedule: FC<{ OpenModal: any }> = ({ OpenModal }) => {
   const days_with_dates = [
      { day: 'Mon', date: '01' },
      { day: 'Tue', date: '02' },
      { day: 'Wed', date: '03' },
      { day: 'Thu', date: '04' },
      { day: 'Fri', date: '05' },
      { day: 'Sat', date: '06' },
      { day: 'Sun', date: '07' },
   ];

   const times = [
      '7:00',
      '8:00',
      '9:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
   ];

   const [selectedCells, setSelectedCells] = useState<string[]>([]);

   useEffect(() => {
      const storedSelectedCells = localStorage.getItem('selectedCells');
      if (storedSelectedCells) {
         setSelectedCells(JSON.parse(storedSelectedCells));
      }
   }, []);

   const handleCellClick = (time: string, day: string) => {
      const cellKey = `${time}-${day}`;
      const updatedSelectedCells = selectedCells.includes(cellKey)
         ? selectedCells.filter((cell) => cell !== cellKey)
         : [...selectedCells, cellKey];

      setSelectedCells(updatedSelectedCells);
      localStorage.setItem('selectedCells', JSON.stringify(updatedSelectedCells));
   };

   return (
      <div className={styles.schedule} id="schedule">
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.schedule_main}>
               <div className={`${styles.schedule_title} title`}>
                  Schedule
               </div>
               <table className={`${styles.schedule_table} ${styles.laptop}`}>
                  <thead>
                     <tr className={styles.times}>
                        <th className={styles.days}></th>
                        {days_with_dates.map((item) => (
                           <th key={item.day}>{`${item.day} ${item.date}`}</th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     {times.map((time: string) => (
                        <tr key={time}>
                           <td className={styles.times}>{time}</td>
                           {days_with_dates.map((item) => (
                              <td
                                 key={item.day}
                                 className={
                                    selectedCells.includes(`${time}-${item.day}`)
                                       ? styles.selected_cell
                                       : styles.normal_cell
                                 }
                                 onClick={() => handleCellClick(time, item.day)}
                              ></td>
                           ))}
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <button
               className={`${styles.btn} btn`}
               onClick={() => { OpenModal(0) }}
            >
               ORDER
            </button>
         </div>
         <Image
            src={reviews}
            alt={reviews}
            className={styles.reviews_img}
         />
      </div>
   );
};

export default Schedule;
