import { FieldNamesSignIn } from '../constants/FieldNamesSignIn';
import { LabelFieldSingIn } from '../constants/LabelFieldSingIn';

import type { InitFormikValuesSignIn } from './sign-in.interfaces';

export const initFormModelSignIn = {
  [FieldNamesSignIn.EMAIL_OR_PHONE]: {
    name: FieldNamesSignIn.EMAIL_OR_PHONE,
    label: LabelFieldSingIn.LabelEmailOrPhone,
    initValue: '',
  },
  [FieldNamesSignIn.PASSWORD]: {
    name: FieldNamesSignIn.PASSWORD,
    label: LabelFieldSingIn.LabelPassword,
    initValue: '',
  },
};

export const initFormikValuesSignIn: InitFormikValuesSignIn = {
  identifier: '',
  password: '',
};
