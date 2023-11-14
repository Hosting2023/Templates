import React, { Dispatch, FC, SetStateAction, useState } from 'react';

import styles from './Schedule.module.scss';

interface ScheduleTimeProps {
  time: string;
  setBtnActive: Dispatch<SetStateAction<boolean>>;
}

const ScheduleTime: FC<ScheduleTimeProps> = ({ time, setBtnActive }) => {
  const [isChosen, setIsChosen] = useState<boolean>(false);

  return time !== '0 - 0' ? (
    <div
      className={
        isChosen ? styles.schedule_day_time_active : styles.schedule_day_time
      }
      onClick={() => {
        setIsChosen(!isChosen);
        setBtnActive(true);
      }}
    >
      {time}
    </div>
  ) : (
    <div className={styles.schedule_day_time}>
      <div className={styles.schedule_day_time_empty} />
    </div>
  );
};

export default ScheduleTime;
