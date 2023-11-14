import React, { FC } from 'react';
import Image from 'next/image';

import refresh from '@/assets/icons/refresh.svg';
import { ConfirmCodeText } from '@/components/confirmCodeCard/constants/ConfirmCodeText';
import { Button, Text } from '@/components/lips';

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
      <Text
        size="xl"
        transform="uppercase"
        className={styles.code}
      >
        {ConfirmCodeText.Code}
      </Text>
      <Text size="xl">{ConfirmCodeText.ExpirationTime}</Text>
      <Text
        size="xl"
        weight="bold"
        className={styles.code}
      >
        {formattedTime}
      </Text>
    </div>
  ) : (
    <>
      <Text
        size="xl"
        className={styles.red}
      >
        {ConfirmCodeText.Expired}
      </Text>
      <Button
        className={styles.icon}
        type="button"
        palette="secondary"
        height="small"
        onClick={onRefreshClick}
      >
        <Image
          src={refresh as unknown as string}
          alt="refresh"
        />
      </Button>
    </>
  );
};

export default Timer;
