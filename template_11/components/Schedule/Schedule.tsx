import { FC, useEffect, useState } from "react";
import styles from "./Schedule.module.scss";
import schedule from '@/public/schedule.svg';
import clean from '@/public/clean-things.svg'
import Image from 'next/image';
import MoveLine from "../MoveLine/MoveLine";



const Schedule = ({ OpenModal }: any) => {
   const days_of_week = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
   ];

   const times = [
      '6:00',
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
      '21:00',
      '22:00'
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
            <div className={`${styles.schedule_title} title`}>
               schedule
               <Image
                  src={schedule}
                  alt="filter"
                  className={styles.schedule_img}
               />
            </div>
            <div className={styles.schedule_content}>
               <div className={styles.schedule_content_img}>
                  <Image
                     src={clean}
                     alt="clean"
                  />
               </div>
               <div className={styles.schedule_main}>
                  <table className={`${styles.schedule_table} ${styles.laptop}`}>
                     <thead>
                        <tr className={styles.times}>
                           <th className={styles.days}></th>
                           {days_of_week.map((day: string) => (
                              <th key={day}>{day}</th>
                           ))}
                        </tr>
                     </thead>
                     <tbody>
                        {times.map((time: string) => (
                           <tr key={time}>
                              <td className={styles.times} > {time}</td>
                              {days_of_week.map((day) => (
                                 <td
                                    key={day}
                                    className={
                                       selectedCells.includes(`${time}-${day}`)
                                          ? styles.selected_cell
                                          : styles.normal_cell
                                    }
                                    onClick={() => handleCellClick(time, day)}
                                 ></td>
                              ))}
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  <div className={styles.mobile}>
                     <table className={styles.schedule_table}>
                        <thead>
                           <tr className={styles.times}>
                              <th className={styles.days}></th>
                              {days_of_week.slice(0, 3).map((day: string) => (
                                 <th key={day}>{day}</th>
                              ))}
                           </tr>
                        </thead>
                        <tbody>
                           {times.map((time: string) => (
                              <tr key={time}>
                                 <td className={styles.times}>{time}</td>
                                 {days_of_week.slice(0, 3).map((day) => (
                                    <td
                                       key={day}
                                       className={
                                          selectedCells.includes(`${time}-${day}`)
                                             ? styles.selected_cell
                                             : styles.normal_cell
                                       }
                                       onClick={() => handleCellClick(time, day)}
                                    ></td>
                                 ))}
                              </tr>
                           ))}
                        </tbody>
                     </table>
                     <table className={styles.schedule_table}>
                        <thead>
                           <tr className={styles.times}>
                              <th className={styles.days}></th>
                              {days_of_week.slice(3).map((day: string) => (
                                 <th key={day}>{day}</th>
                              ))}
                           </tr>
                        </thead>
                        <tbody>
                           {times.map((time: string) => (
                              <tr key={time}>
                                 <td className={styles.times}>{time}</td>
                                 {days_of_week.slice(3).map((day) => (
                                    <td
                                       key={day}
                                       className={
                                          selectedCells.includes(`${time}-${day}`)
                                             ? styles.selected_cell
                                             : styles.normal_cell
                                       }
                                       onClick={() => handleCellClick(time, day)}
                                    ></td>
                                 ))}
                              </tr>
                           ))}
                        </tbody>
                     </table>

                  </div>
               </div>
               <button
                  className={`${styles.btn} btn`}
                  onClick={() => OpenModal(0)}
               >
                  ORDER
               </button>
            </div>
         </div>
         <div className={styles.filter_line}>
            <MoveLine word="reviews from my clients" />
         </div>
      </div>
   )
}

export default Schedule
