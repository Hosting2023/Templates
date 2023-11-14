import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import type { InitFormikValuesSignIn } from '../form-model/sign-in.interfaces';

interface SubmitSignInProps {
  setIsOpen: (val: boolean) => void;
  login: (val: InitFormikValuesSignIn) => void;
  error?: FetchBaseQueryError | SerializedError;
}

export const useSubmitSignIn = ({
  setIsOpen,
  login,
  error,
}: SubmitSignInProps) => {
  const handleSubmit = async (value: InitFormikValuesSignIn) => {
    login(value);
    if (!error) {
      setIsOpen(false);
    }
  };

  return { handleSubmit };
};
