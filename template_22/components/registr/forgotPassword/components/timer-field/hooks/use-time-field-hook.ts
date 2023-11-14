import { ChangeEvent, useEffect } from 'react';
import { useFormikContext } from 'formik';

import { SocketEvents } from '@/hooks/sockets/enum/socket-events';
import { useSocket } from '@/hooks/sockets/useSocket';

import { IsConfirmForgotPasswordCodeEvent } from '../../../constants/isConfirmForgotPasswordCodeEvent.enum';
import { IsConfirmVerifyCode } from '../../../constants/IsConfirmVerifyCode.enum';
import { IInitFormikValues } from '../../../form-model/forgot-password.interface';

import { onConnectHelper } from './helpers/onConnect.helper';
import { onConnectErrorHelper } from './helpers/onConnectError.helper';
import { onSendVerificationCodeHelper } from './helpers/onSendVerificationCode.helper';

export const useTimerField = (
  setIsConfirmVerifyCode: (val: IsConfirmVerifyCode) => void,
  isConfirmVerifyCode: IsConfirmVerifyCode,
) => {
  const { socket } = useSocket({ path: '/main/forgot-password/' });
  const { values } = useFormikContext<IInitFormikValues>();

  const startListeners = () => {
    const onSendVerificationCode = onSendVerificationCodeHelper(
      socket,
      setIsConfirmVerifyCode,
    );
    const onConnect = onConnectHelper(setIsConfirmVerifyCode);
    const onConnectError = onConnectErrorHelper(setIsConfirmVerifyCode);

    if (isConfirmVerifyCode === IsConfirmVerifyCode.Reject) {
      onConnect();
    }

    socket.on(
      IsConfirmForgotPasswordCodeEvent.SendVerificationCode,
      onSendVerificationCode,
    );
    socket.on('connect', onConnect);
    socket.on('connect_error', onConnectError);

    return () => {
      socket.off(
        IsConfirmForgotPasswordCodeEvent.SendVerificationCode,
        onSendVerificationCode,
      );
      socket.off('connect', onConnect);
      socket.off('connect_error', onConnectError);
    };
  };

  useEffect(() => {
    socket.connect();
    const cleanUpListeners = startListeners();
    return () => {
      socket.disconnect();
      cleanUpListeners();
    };
  }, []);

  const handleNumber = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    if (currentTarget.value.length === 4) {
      socket.emit(SocketEvents.ForgotPassword, {
        email: values.email,
        verificationCode: values.code,
      });
    }
  };

  return {
    handleNumber,
  };
};
