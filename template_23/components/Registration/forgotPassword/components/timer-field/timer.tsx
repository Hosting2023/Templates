import React, { FC } from 'react';

import { ConfirmCodeText } from '@/components/confirmCodeCard/constants/ConfirmCodeText';

import useTimer from './hooks/use-timer.hook';

import styles from './styles.module.scss';

interface ITimerProps {
  timeForCodeSec: number;
}

const Timer: FC<ITimerProps> = ({ timeForCodeSec }) => {
  const { formattedTime, timeLeft, onRefreshClick } = useTimer({
    timeForCodeSec,
  });

  return timeLeft[1] ? (
    <div className={styles.codeWrapper}>
      <p
        className={styles.code}
      >
        {ConfirmCodeText.Code}
      </p>
      <p>{ConfirmCodeText.ExpirationTime}</p>
      <p
        className={styles.code}
      >
        {formattedTime}
      </p>
    </div>
  ) : (
    <>
      <p
        className={styles.red}
      >
        {ConfirmCodeText.Expired}
      </p>
      <button
        className={styles.icon}
        type="button"
        onClick={onRefreshClick}
      >
      </button>
    </>
  );
};

export default Timer;
