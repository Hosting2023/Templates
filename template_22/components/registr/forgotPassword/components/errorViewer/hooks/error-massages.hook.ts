import { useCallback } from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { IsConfirmVerifyCode } from '@/components/registr/modalRegistration/signUp/form-model/sign-up.enum';



interface IErrorMessage {
  main: string;
  prefix: string;
  isConfirmVerifyCode: IsConfirmVerifyCode;
}

const useErrorMessage = (
  isConfirmVerifyCode: IsConfirmVerifyCode,
  forgotFetchError:
    | FetchBaseQueryError
    | SerializedError
    | undefined
    | { message?: string },
  forgotFetchIsSuccess: boolean,
): [IErrorMessage, () => string | undefined] => {
  const generateErrorMessage = useCallback(() => {
    if (forgotFetchError && 'message' in forgotFetchError) {
      return forgotFetchError.message;
    }
    return 'Something wrong';
  }, [forgotFetchError]);

  const errorMessage: IErrorMessage = {
    main: '',
    prefix: '',
    isConfirmVerifyCode: IsConfirmVerifyCode.Default,
  };

  switch (isConfirmVerifyCode) {
    case IsConfirmVerifyCode.ConnectionError:
      errorMessage.main = 'Connected error WS';
      errorMessage.prefix = '';
      errorMessage.isConfirmVerifyCode = IsConfirmVerifyCode.ConnectionError;
      break;
    case IsConfirmVerifyCode.Fulfilled:
      errorMessage.main = 'Password reload successfully';
      errorMessage.prefix = '';
      errorMessage.isConfirmVerifyCode = IsConfirmVerifyCode.Fulfilled;
      break;
    case IsConfirmVerifyCode.Reject:
      errorMessage.main = 'Wrong code';
      errorMessage.prefix = '';
      errorMessage.isConfirmVerifyCode = IsConfirmVerifyCode.Reject;
      break;
    default:
      if (forgotFetchIsSuccess) {
        errorMessage.prefix = 'Please';
        errorMessage.main = 'check your email';
        errorMessage.isConfirmVerifyCode = IsConfirmVerifyCode.Pending;
      }
      break;
  }

  return [errorMessage, generateErrorMessage];
};

export default useErrorMessage;
