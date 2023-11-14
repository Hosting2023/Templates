import React, { Dispatch, FC } from "react";

import styles from "./Schedule.module.scss";
import ScheduleTime from "./ScheduleTime";

interface ScheduleDayProps {
  item: {
    day: string;
    workPeriods: {
      startTime: number;
      endTime: number;
    }[];
  };
  btnActive: boolean;
  setBtnActive: Dispatch<React.SetStateAction<boolean>>;
}

const ScheduleDay: FC<ScheduleDayProps> = ({ item, btnActive, setBtnActive }) => {
  return (
    <div className={styles.table_days_day}>
      <span className={styles.table_days_day_text}>{item.day}</span>
      {item.workPeriods.map((period, idx) => (
        <ScheduleTime period={period} btnActive={btnActive} setBtnActive={setBtnActive} key={idx} />
      ))}
    </div>
  );
};

export default ScheduleDay;
