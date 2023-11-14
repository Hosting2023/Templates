import { Socket } from 'socket.io-client';

import { IsConfirmVerifyCode } from '@/components/Registration/forgotPassword/constants/IsConfirmVerifyCode.enum';

export const onSendVerificationCodeHelper =
  (
    socket: Socket,
    setIsConfirmVerifyCode: (val: IsConfirmVerifyCode) => void,
  ) =>
  (message: IsConfirmVerifyCode) => {
    if (message === IsConfirmVerifyCode.Fulfilled) {
      socket.disconnect();
    }
    setIsConfirmVerifyCode(message);
  };
