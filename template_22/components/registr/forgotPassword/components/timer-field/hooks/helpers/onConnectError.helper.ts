import { IsConfirmVerifyCode } from '@/components/registr/forgotPassword/constants/IsConfirmVerifyCode.enum';

export const onConnectErrorHelper =
  (setIsConfirmVerifyCode: (val: IsConfirmVerifyCode) => void) =>
  (err: Error) => {
    setIsConfirmVerifyCode(IsConfirmVerifyCode.ConnectionError);
    console.log('Error:', err.message);
  };
