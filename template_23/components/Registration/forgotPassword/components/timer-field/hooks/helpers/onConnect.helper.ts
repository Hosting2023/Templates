import { IsConfirmVerifyCode } from '@/components/Registration/forgotPassword/constants/IsConfirmVerifyCode.enum';

export const onConnectHelper =
  (setIsConfirmVerifyCode: (val: IsConfirmVerifyCode) => void) => () => {
    setIsConfirmVerifyCode(IsConfirmVerifyCode.Pending);
  };
