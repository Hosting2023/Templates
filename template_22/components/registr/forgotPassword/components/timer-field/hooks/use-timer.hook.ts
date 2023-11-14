import { useCallback, useEffect, useState } from 'react';

interface UseTimerProps {
  timeForCodeSec: number;
}

const useTimer = ({ timeForCodeSec }: UseTimerProps) => {
  const calculateTimeLeft = (): [number, number] => {
    const now = new Date().getTime();
    const diff = (finishTime - now) / 1000;
    return diff > 0
      ? [Math.floor((diff / 60) % 60), Math.floor(diff % 60)]
      : [0, 0];
  };

  const [finishTime, setFinishTime] = useState(
    () => new Date().getTime() + timeForCodeSec * 1000,
  );
  const [timeLeft, setTimeLeft] = useState<[number, number]>(calculateTimeLeft);

  useEffect(() => {
    const timerID = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timerID);
  }, [finishTime]);

  const formattedTime = `0${timeLeft[0]}:${
    timeLeft[1] < 10 ? `0${timeLeft[1]}` : timeLeft[1]
  }`;

  const onRefreshClick = useCallback(() => {
    setFinishTime(new Date().getTime() + timeForCodeSec * 1000);
  }, [timeForCodeSec]);

  return {
    formattedTime,
    timeLeft,
    onRefreshClick,
  };
};

export default useTimer;
