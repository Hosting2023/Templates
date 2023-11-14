import { FieldNamesSignIn } from '../constants/FieldNamesSignIn';
import { LabelFieldSingIn } from '../constants/LabelFieldSingIn';

interface FormInput {
  name: FieldNamesSignIn;
  label: LabelFieldSingIn;
  initValue: string;
}

export type InitValuesSignIn = Record<FieldNamesSignIn, FormInput>;
export type InitFormikValuesSignIn = Record<FieldNamesSignIn, string>;
