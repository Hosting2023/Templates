import React, { Dispatch, FC, useState } from 'react';
import classNames from 'classnames';

import styles from './Schedule.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface ScheduleTimeProps {
  period: {
    startTime: number;
    endTime: number;
  };
  btnActive: boolean;
  setBtnActive: Dispatch<React.SetStateAction<boolean>>;
}

const ScheduleTime: FC<ScheduleTimeProps> = ({
  period,
  btnActive,
  setBtnActive,
}) => {
  const [isChosen, setIsChosen] = useState<boolean>(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  return isMobile ? (
    <div
      style={{
        top: `${+(period.startTime - 8) * 17}px`,
        height: `${(period.endTime - period.startTime) * 17}px`,
      }}
      className={classNames(
        isChosen
          ? styles.table_days_day_block_active
          : styles.table_days_day_block,
      )}
      onClick={() => {
        setIsChosen(!isChosen);
        setBtnActive(!btnActive);
      }}
    ></div>
  ) : (
    <div
      style={{
        top: `${+(period.startTime - 8) * 29}px`,
        height: `${(period.endTime - period.startTime) * 29}px`,
      }}
      className={classNames(
        isChosen
          ? styles.table_days_day_block_active
          : styles.table_days_day_block,
      )}
      onClick={() => {
        setIsChosen(!isChosen);
        setBtnActive(!btnActive);
      }}
    ></div>
  );
};

export default ScheduleTime;
