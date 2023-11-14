import * as yup from 'yup';

import { ErrorMessagesSignIn } from '../constants/ErrorMessagesSignIn';

const validateEmail = (email: string | undefined) =>
  yup
    .string()
    .email(ErrorMessagesSignIn.EmailOrPhoneInvalid)
    .isValidSync(email);

const validatePhone = (phone: string | undefined) =>
  yup
    .string()
    .matches(
      /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
      ErrorMessagesSignIn.EmailOrPhoneInvalid,
    )
    .isValidSync(phone);

export const validationSchemaSignIn = yup.object().shape({
  identifier: yup
    .string()
    .required(ErrorMessagesSignIn.EmailOrPhoneRequired)
    .test(
      'emailOrPhone',
      ErrorMessagesSignIn.EmailOrPhoneInvalid,
      (value) => validateEmail(value) || validatePhone(value),
    ),
  password: yup
    .string()
    .required(ErrorMessagesSignIn.PasswordRequired)
    .min(5, ErrorMessagesSignIn.PasswordTooShort),
});
