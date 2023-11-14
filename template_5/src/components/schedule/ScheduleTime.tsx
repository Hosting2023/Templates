import { Dispatch, FC, SetStateAction, useState } from 'react';
import cn from 'classnames';

import styles from './Schedule.module.scss';

interface ScheduleTimeProps {
  time: string;
  btnActive: boolean;
  setBtnActive: Dispatch<SetStateAction<boolean>>;
}

const ScheduleTime: FC<ScheduleTimeProps> = ({
  time,
  btnActive,
  setBtnActive,
}) => {
  const [isChosen, setIsChosen] = useState<boolean>(false);

  const setTime = () => {
    setIsChosen(!isChosen);
    setBtnActive(!btnActive);
  };

  return time !== '0' ? (
    <div
      className={cn(
        isChosen
          ? styles.schedule_day_wrapper_bottom_block_active
          : styles.schedule_day_wrapper_bottom_block,
      )}
      onClick={() => setTime()}
    >
      {time}
    </div>
  ) : (
    <div className={styles.schedule_day_wrapper_bottom_block}>
      <div className={styles.schedule_day_wrapper_bottom_block_empty} />
    </div>
  );
};

export default ScheduleTime;
