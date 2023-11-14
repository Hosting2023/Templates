import { useState } from "react";
import styles from "./Schedule.module.scss";

type CleaningBlock = {
  time: string;
  empty: boolean;
  key: number;
};

type CleaningSchedule = {
  day: string;
  cleaningBlocks: CleaningBlock[];
};
const Schedule = ({ OpenModal }: any) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const [days, setDay] = useState<string>();
  const daysOfWeek = ["Monday", "Tuesday", "WEDNESD", "THURSDAY", "FRIDAY", "SATARDAY", "SATARDAY"];
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(currentDate.getDate() - currentDay + 1);

  const cleaningSchedule: CleaningSchedule[] = [
    {
      day: daysOfWeek[0] || "Monday",
      cleaningBlocks: [
        { time: "7-10", empty: false, key: 0 },
        { time: "13-15", empty: false, key: 1 },
        { time: "17-43", empty: false, key: 2 },
      ],
    },
    {
      day: daysOfWeek[1] || "Monday",
      cleaningBlocks: [
        { time: "8-11", empty: false, key: 0 },
        { time: "14-16", empty: false, key: 1 },
        { time: "18-20", empty: false, key: 2 },
      ],
    },
  ];

  //   const fillEmptyBlocks = (cleaningBlocks: CleaningBlock[], dayIndex: number) => {
  //     const emptyBlocksCount = 7 - cleaningBlocks.length;
  //     const emptyBlocks = Array.from({ length: emptyBlocksCount }).map((_, index) => ({
  //       time: "",
  //       empty: true,
  //       key: index,
  //     }));

  //     const combinedBlocks = cleaningBlocks.concat(emptyBlocks).slice(0, 7);
  //     if (combinedBlocks.every((block) => block.empty)) {
  //       return combinedBlocks.map((block, index) => ({
  //         time: daysOfWeek[dayIndex],
  //         empty: true,
  //         key: index,
  //       }));
  //     }

  //     return combinedBlocks;
  //   };

  const handleCleaningBlockClick = (time: string, day: string) => {
    setCurrentTime(time);
    setDay(day);
  };
  return (
    <div className={styles.schedule} id="schedule">
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.schedule_title} title`}>Schedule</div>
        <div className={styles.schedule_content}>
          <div className={styles.calendar}>
            <div className={styles.cleaningScheduleContainer}>
              <div className={styles.calendarGrid}>
                {daysOfWeek.map((day, index) => {
                  const currentDay = new Date(firstDayOfWeek);
                  currentDay.setDate(currentDay.getDate() + index);
                  const timeBlocksForDay =
                    cleaningSchedule
                      .find((schedule: any) => schedule.day === day)
                      ?.cleaningBlocks.map((block: any) => block.time) || [];

                  return (
                    <div>
                      <div
                        key={index}
                        className={`${styles.calendarCell} ${
                          days === daysOfWeek[index]
                            ? styles.cleaningDateActive
                            : styles.cleaningDate
                        }`}
                      >
                        <div className={styles.dayOfWeek}>{day}</div>
                        <div>{currentDay.getDate()}</div>
                      </div>
                      <div className={styles.timeBlocks}>
                        {Array.from({ length: 3 }).map((_, timeIndex) => {
                          const time = timeBlocksForDay[timeIndex] || "";
                          return (
                            <div
                              key={timeIndex}
                              className={`${styles.calendarCell} ${styles.cleaningBlock} ${
                                time === "" ? styles.emptyCleaningBlock : ""
                              } ${time === currentTime ? styles.active : ""}`}
                              onClick={() => time !== "" && handleCleaningBlockClick(time, day)}
                            >
                              {time}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              className={`${styles.btn} btn`}
              disabled={!currentTime}
              onClick={() => OpenModal()}
            >
              ORDER
            </button>
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default Schedule;
