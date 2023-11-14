import { FieldNamesResetPassword } from '../constants/FieldNamesResetPassword';
import { LabelFieldResetPassword } from '../constants/LabelFieldResetPassword';

export interface IInitValuesResetPassword {
  password: string;
  confirmPassword: string;
}

interface FormInput {
  name: FieldNamesResetPassword;
  label: LabelFieldResetPassword;
  initValue: string;
}

export type InitValuesResetPassword = Record<
  FieldNamesResetPassword,
  FormInput
>;
export type InitFormikValuesResetPassword = Record<
  FieldNamesResetPassword,
  string
>;
