import { useEffect, useState } from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { useForgotPasswordFetchMutation } from '@/store/services/auth/auth';

import { IsConfirmVerifyCode } from '../constants/IsConfirmVerifyCode.enum';
import { IInitFormikValues } from '../form-model/forgot-password.interface';

interface IForgotPasswordLogic {
  isConfirmVerifyCode: IsConfirmVerifyCode;
  isOpenTimer: boolean;
  handleSubmit: (value: IInitFormikValues) => void;
  forgotFetchError:
    | FetchBaseQueryError
    | SerializedError
    | undefined
    | { message?: string };
  isSuccess: boolean;
  setIsConfirmVerifyCode: (value: IsConfirmVerifyCode) => void;
}

const useForgotPasswordLogic = (
  closeModal: (status: boolean) => void,
): IForgotPasswordLogic => {
  const [forgotPasswordFetch, { error: forgotFetchError, isSuccess }] =
    useForgotPasswordFetchMutation();

  const [isOpenTimer, setIsOpenTimer] = useState(false);

  const [isConfirmVerifyCode, setIsConfirmVerifyCode] =
    useState<IsConfirmVerifyCode>(IsConfirmVerifyCode.Default);

  useEffect(() => {
    if (isConfirmVerifyCode === IsConfirmVerifyCode.Fulfilled) {
      closeModal(true);
    }
  }, [isConfirmVerifyCode, closeModal]);

  const handleSubmit = (value: IInitFormikValues) => {
    forgotPasswordFetch({ email: value.email });
    setIsOpenTimer(true);
  };

  return {
    isConfirmVerifyCode,
    isOpenTimer,
    handleSubmit,
    forgotFetchError,
    isSuccess,
    setIsConfirmVerifyCode,
  };
};

export default useForgotPasswordLogic;
