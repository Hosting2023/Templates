import React, { Dispatch, FC, SetStateAction } from 'react';

import styles from './Schedule.module.scss';
import ScheduleTime from './ScheduleTime';
import MainButton from '@/src/ui/Buttons/MainButton/MainButton';

interface ScheduleDayProps {
  day: string;
  appointments: {
    start: string;
    end: string;
  }[];
  isActive: boolean;
  setActiveDay: Dispatch<SetStateAction<string>>;
  setBtnActive: Dispatch<SetStateAction<boolean>>;
}

const ScheduleDay: FC<ScheduleDayProps> = ({
  day,
  appointments,
  isActive,
  setActiveDay,
  setBtnActive,
}) => {
  return (
    <div className={styles.schedule_day_wrapper}>
      <div
        className={styles.schedule_day_top}
        onClick={() => setActiveDay(day)}
      >
        <MainButton
          item={day}
          width={'100%'}
          isBold={true}
          isActive={isActive}
        />
      </div>
      <div className={styles.schedule_day_bottom}>
        {appointments.map((item, idx) => (
          <ScheduleTime
            time={`${item.start} - ${item.end}`}
            key={idx}
            setBtnActive={setBtnActive}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduleDay;
