import React, { ChangeEvent } from 'react';
/* eslint-disable import/no-cycle */
import {
  FC,
  FocusEvent,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import Image from 'next/image';

import pencil from '@/assets/icons/pencil.svg';
import refresh from '@/assets/icons/refresh.svg';
import { ConfirmCodeText } from '@/components/confirmCodeCard/constants/ConfirmCodeText';
import { Button, Text } from '@/components/lips';

import CustomInput from '../lips/customInput';

import { getClassNames } from './config';

import styles from './styles.module.scss';

interface IConfirmCodeProps {
  timeForCodeSec: number;
  codeValue: string;
  onChangeCode: (codeValue: string) => void;
  onRepeatSendCode: VoidFunction;
  touchedCode?: boolean;
  errorCode?: string;
  onBlurCode?: (e: FocusEvent<HTMLInputElement>) => void;
  emailValue?: string;
  onChangeEmail?: (emailValue: string) => void;
  onBlurEmail?: (e: FocusEvent<HTMLInputElement>) => void;
  touchedEmail?: boolean;
  errorEmail?: string;
  codeClassName?: string;
  children?: ReactNode;
}

const ConfirmCode: FC<IConfirmCodeProps> = ({
  emailValue,
  timeForCodeSec,
  onRepeatSendCode,
  touchedEmail,
  errorEmail,
  codeValue,
  errorCode,
  children,
  onChangeCode,
  touchedCode,
  onBlurCode,
  codeClassName = '',
  onChangeEmail = () => {
    console.log('here');
  },
  onBlurEmail = () => {
    console.log('here');
  },
}) => {
  const { inputClassName } = getClassNames(codeClassName);

  const [finishTime, setFinishTime] = useState(
    new Date().getTime() + timeForCodeSec * 1000,
  );
  const [[diffM, diffS], setDiff] = useState([0, 0]);
  const [tick, setTick] = useState(false);
  const [isShowEdit, setIsShowEdit] = useState(true);
  const [focusEmail, setFocusEmail] = useState(false);
  const emailFef = useRef<HTMLInputElement>(null);

  const handleNumber = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    onChangeCode(currentTarget.value);
  };

  useEffect(() => {
    const diff = (finishTime - new Date().getTime()) / 1000;
    if (diff < 0) return;
    setDiff([Math.floor((diff / 60) % 60), Math.floor(diff % 60)]);
  }, [tick, finishTime]);

  useEffect(() => {
    const timerID = setInterval(() => setTick(!tick), 1000);
    return () => clearInterval(timerID);
  }, [tick]);

  const timer = useMemo(
    () => `0${diffM}:${diffS < 10 ? `0${diffS}` : diffS}`,
    [diffM, diffS],
  );

  const onRefreshClick = useCallback(() => {
    setFinishTime(new Date().getTime() + timeForCodeSec * 1000);
    onRepeatSendCode();
  }, []);

  const onEditClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailFef.current?.focus();
    setFocusEmail(true);
    setIsShowEdit(false);
  }, []);

  const onResendClick = () => {
    setIsShowEdit(true);
    setFocusEmail(false);
  };

  const onBlurEmailHandler = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      if (!errorEmail) setFocusEmail(false);
      onBlurEmail(e);
    },
    [errorEmail],
  );

  const timerText = useMemo(
    () =>
      diffS ? (
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
            {timer}
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
      ),
    [diffS],
  );

  return (
    <>
      {(children || emailValue) && (
        <div className={styles.emailWrapper}>
          <CustomInput
            variant="default"
            label={ConfirmCodeText.EnterEmail}
            type="email"
            id="email"
            value={emailValue}
            touched={touchedEmail}
            error={errorEmail}
            disabled={!focusEmail}
            inputRef={emailFef}
            onBlur={onBlurEmailHandler.bind(this)}
            onChange={() => onChangeEmail.bind(this)}
            className={cn(styles.input, isShowEdit && styles.disabled)}
          />
          {isShowEdit ? (
            <Button
              className={styles.icon}
              palette="secondary"
              height="small"
              onClick={onEditClick.bind(this)}
              // TODO: remove eslint jsx-no-bind
              // onClick={onEditClick.bind(this)}
            >
              <Image
                src={pencil as unknown as string}
                alt="pencil"
              />
            </Button>
          ) : (
            <Button
              className={styles.resend}
              palette="secondary"
              onClick={onResendClick}
            >
              {ConfirmCodeText.Resend}
            </Button>
          )}
        </div>
      )}
      <CustomInput
        variant="default"
        label={ConfirmCodeText.VerificationCode}
        type="number"
        id="code"
        disabled={!!errorEmail}
        value={codeValue}
        touched={touchedCode}
        error={errorCode}
        onBlur={onBlurCode}
        onChange={handleNumber.bind(this)}
        className={inputClassName}
      />
      <div className={styles.timerWrapper}>{timerText}</div>
    </>
  );
};

export default ConfirmCode;
