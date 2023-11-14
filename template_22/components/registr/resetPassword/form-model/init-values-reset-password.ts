import { FieldNamesResetPassword } from '../constants/FieldNamesResetPassword';
import { LabelFieldResetPassword } from '../constants/LabelFieldResetPassword';

import type { InitFormikValuesResetPassword } from './reset-password.interfaces';

export const initFormModelResetPassword = {
  [FieldNamesResetPassword.Password]: {
    name: FieldNamesResetPassword.Password,
    label: LabelFieldResetPassword.NewPassword,
    initValue: '',
  },
  [FieldNamesResetPassword.PasswordConfirmation]: {
    name: FieldNamesResetPassword.PasswordConfirmation,
    label: LabelFieldResetPassword.RepeatNewPassword,
    initValue: '',
  },
};

export const initFormikValuesResetPassword: InitFormikValuesResetPassword = {
  password: '',
  passwordConfirmation: '',
};
