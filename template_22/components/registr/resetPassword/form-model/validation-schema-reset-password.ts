import * as yup from 'yup';

import { ErrorMessagesResetPassword } from '../constants/ErrorMessagesResetPassword';
import { FieldNamesResetPassword } from '../constants/FieldNamesResetPassword';

export const validationSchemaResetPassword = yup.object().shape({
  [FieldNamesResetPassword.Password]: yup
    .string()
    .required(ErrorMessagesResetPassword.PasswordRequired)
    .min(5, ErrorMessagesResetPassword.PasswordTooShort),
  [FieldNamesResetPassword.PasswordConfirmation]: yup
    .string()
    .oneOf(
      [yup.ref(FieldNamesResetPassword.Password), null],
      ErrorMessagesResetPassword.PasswordConfirmationNoMatch,
    ),
});
