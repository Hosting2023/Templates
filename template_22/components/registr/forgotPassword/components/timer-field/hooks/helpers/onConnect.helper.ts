import { IsConfirmVerifyCode } from '@/components/registr/forgotPassword/constants/IsConfirmVerifyCode.enum';

export const onConnectHelper =
  (setIsConfirmVerifyCode: (val: IsConfirmVerifyCode) => void) => () => {
    setIsConfirmVerifyCode(IsConfirmVerifyCode.Pending);
  };
