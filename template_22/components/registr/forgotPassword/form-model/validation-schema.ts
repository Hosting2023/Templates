import * as yup from 'yup';

import { ErrorMessages } from '../constants/errorMessages.enum';

export const validationSchemaForgotPassword = yup.object().shape({
  email: yup
    .string()
    .email(ErrorMessages.InvalidEmail)
    .required(ErrorMessages.Required),
  code: yup
    .string()
    .test(
      'is-empty-or-valid',
      ErrorMessages.WrongFormat,
      (value) =>
        !value ||
        (/^\d{1,4}([a-zA-Z])?$/.test(value) &&
          value.length >= 1 &&
          value.length <= 4),
    ),
});
