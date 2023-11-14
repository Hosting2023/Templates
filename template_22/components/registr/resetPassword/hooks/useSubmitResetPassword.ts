import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import type { InitFormikValuesResetPassword } from '../form-model/reset-password.interfaces';

interface SubmitResetPasswordProps {
  setIsOpen: (val: boolean) => void;
  resetPassword: (val: InitFormikValuesResetPassword) => void;
  error?: FetchBaseQueryError | SerializedError;
}

export const useSubmitResetPassword = ({
  setIsOpen,
  resetPassword,
  error,
}: SubmitResetPasswordProps) => {
  const handleSubmit = async (value: InitFormikValuesResetPassword) => {
    resetPassword(value);
    // TODO it is required to set global error handler and pass there all error from HTTP and redux
    // TODO this error do not catch error from Ky instance, only from redux
    if (!error) {
      setIsOpen(false);
    }
  };
  return { handleSubmit };
};
