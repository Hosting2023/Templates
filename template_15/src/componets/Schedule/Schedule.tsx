import { FC, useEffect, useState } from "react";
import styles from "./Schedule.module.scss";
import Image from 'next/image'




const Schedule: FC<{ OpenModal: any }> = ({ OpenModal }) => {
   const days_with_dates = [
      { day: 'Mon', },
      { day: 'Tue', },
      { day: 'Wed', },
      { day: 'Thu', },
      { day: 'Fri', },
      { day: 'Sat', },
      { day: 'Sun', },
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
   return (<div className={styles.schedule} id="schedule" >

      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.schedule_content}>

            <div className={`${styles.schedule_title} title`}>
               Schedule
            </div>

            <table className={`${styles.schedule_table} ${styles.laptop}`}>
               <thead>
                  <tr className={styles.times}>
                     <th className={styles.days}></th>
                     {days_with_dates.map((item) => (
                        <th key={item.day}>{`${item.day}`}</th>
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
            <button className={`${styles.schedule_btn} btn`}
               onClick={() => OpenModal(0)}
            >
               Order
            </button>
         </div>
      </div>
   </div >
   )
}


export default Schedule;