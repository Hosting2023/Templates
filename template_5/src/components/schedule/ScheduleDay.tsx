import { Dispatch, FC, SetStateAction } from 'react';

import styles from './Schedule.module.scss';
import ScheduleTime from './ScheduleTime';
import classNames from 'classnames';

interface ScheduleDayProps {
  day: string;
  appointments: string[];
  btnActive: boolean;
  setBtnActive: Dispatch<SetStateAction<boolean>>;
  dayNum: number;
  activeDay: number;
  setActiveDay: Dispatch<SetStateAction<number>>;
}

const ScheduleDay: FC<ScheduleDayProps> = ({
  day,
  appointments,
  btnActive,
  setBtnActive,
  dayNum,
  activeDay,
  setActiveDay,
}) => {
  return (
    <div className={styles.schedule_day_wrapper}>
      <div
        className={classNames(
          styles.schedule_day_wrapper_top,
          dayNum === activeDay ? styles.schedule_day_wrapper_top_active : '',
        )}
        onClick={() => {
          setActiveDay(dayNum);
        }}
      >
        <span>{day}</span>
      </div>
      <div className={styles.schedule_day_wrapper_line}></div>
      <div className={styles.schedule_day_wrapper_bottom}>
        {appointments.map((item, index) => (
          <ScheduleTime
            time={item}
            btnActive={btnActive}
            setBtnActive={setBtnActive}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduleDay;
