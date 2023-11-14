import React, { useState } from 'react';
import styles from './Calendar.module.scss';
type CleaningBlock = {
  time: string;
  empty: boolean;
  key: number;
};

type CleaningSchedule = {
  day: string;
  cleaningBlocks: CleaningBlock[];
};

function Calendar({ OpenModal }: any) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(currentDate.getDate() - currentDay + 1);

  const cleaningSchedule: CleaningSchedule[] = [
    {
      day: daysOfWeek[0],
      cleaningBlocks: [
        { time: '7-10', empty: false, key: 0 },
        { time: '13-15', empty: false, key: 1 },
        { time: '17-43', empty: false, key: 2 },
      ],
    },
    {
      day: daysOfWeek[1],
      cleaningBlocks: [
        { time: '8-11', empty: false, key: 0 },
        { time: '14-16', empty: false, key: 1 },
        { time: '18-20', empty: false, key: 2 },
      ],
    },
  ];

  const fillEmptyBlocks = (cleaningBlocks: CleaningBlock[], dayIndex: number) => {
    const emptyBlocksCount = 7 - cleaningBlocks.length;
    const emptyBlocks = Array.from({ length: emptyBlocksCount }).map((_, index) => ({
      time: '',
      empty: true,
      key: index,
    }));

    const combinedBlocks = cleaningBlocks.concat(emptyBlocks).slice(0, 7);
    if (combinedBlocks.every((block) => block.empty)) {
      return combinedBlocks.map((block, index) => ({
        time: daysOfWeek[dayIndex],
        empty: true,
        key: index,
      }));
    }

    return combinedBlocks;
  };

  const handleCleaningBlockClick = (time: string, day: string) => {
    setCurrentTime(time);
  };

  return (
 <div className={styles.calendar}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.cleaningScheduleContainer}>
               <table className={styles.cleaningTable}>
                  <thead>
                     <tr>
                        {daysOfWeek.map((day) => (
                           <th key={day} className={styles.dayOfWeek}>
                              {day}
                           </th>
                        ))}
                     </tr>
                     <tr>
                        {Array.from({ length: 7 }).map((_, index) => {
                           const currentDay = new Date(firstDayOfWeek);
                           currentDay.setDate(currentDay.getDate() + index);
                           return (
                              <td key={index} className={styles.cleaningDate}>
                                 {currentDay.getDate()}
                              </td>
                           );
                        })}
                     </tr>
                  </thead>
                  <tbody>
                     {Array.from({ length: 3 }).map((_, rowIndex) => (
                        <tr key={rowIndex} className={`${styles.dayRow} ${styles.calendarRow}`}>
                           {fillEmptyBlocks(
                              cleaningSchedule.map((daySchedule) => daySchedule.cleaningBlocks[rowIndex]),
                              3
                           ).map((block, colIndex) => (
                              <td
                                 key={colIndex}
                                 className={`${styles.cleaningBlock} ${block.empty ? styles.emptyCleaningBlock : ''} ${
                                    block.time === currentTime ? styles.active : ''
                                 }`}
                                 onClick={() =>
                                    !block.empty && handleCleaningBlockClick(block.time, cleaningSchedule[colIndex].day)
                                 }
                              >
                                 {block.time}
                              </td>
                           ))}
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <button
               className={styles.btn}
               disabled={!currentTime}
               onClick={() => OpenModal()}
            >
               Confirm
            </button>
         </div>
      </div>
  );
}

export default Calendar;
