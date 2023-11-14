import { FC, useEffect, useState } from "react";
import styles from "./Schedule.module.scss";

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
   return (<div className={styles.schedule}>
      <div className={`${styles.wrapper} wrapper`}>
         <div className={`${styles.schedule_title} title`}>
            Schedule
         </div>
         <div className={styles.schedule_content}>
            <table className={`${styles.schedule_table} ${styles.laptop}`}>
               <thead>
                  <tr>
                     <th className={styles.hide}></th>
                     {times.map((time: string) => (
                        <th key={time}>{time}</th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {days_of_week.map((day: string) => (
                     <tr key={day}>
                        <td className={styles.day}>{day}</td>
                        {times.map((time) => (
                           <td
                              key={`${day}-${time}`}
                              className={
                                 selectedCells.includes(`${day}-${time}`)
                                    ? styles.selected_cell
                                    : styles.normal_cell
                              }
                              onClick={() => handleCellClick(day, time)}
                           ></td>
                        ))}
                     </tr>
                  ))}
               </tbody>
            </table>


         </div>
         <button className={`${styles.btn_order} btn`}
            onClick={() => { OpenModal(0) }}
         >
            Order
         </button>
      </div>
   </div>
   )
}


export default Schedule;