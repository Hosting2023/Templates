import type { FC } from 'react';

import type {
  FieldNamesAddresses,
  FieldNamesGeneralInfo,
  FieldNamesPasswords,
  FieldNamesVerification,
  Gender,
  RootFieldNames,
} from './sign-up.enum';

interface FormInput {
  name: string;
  label: string;
  initValue: string | Gender;
}

interface ChipIcon {
  alt: string;
  className: string;
}
interface LabelInfo {
  title?: string;
  chipLabel: string;
  chipIcon: FC<ChipIcon>;
}

export type SubFieldGeneralInfo = Record<FieldNamesGeneralInfo, FormInput> &
  LabelInfo;
export type SubFieldVerification = Record<FieldNamesVerification, FormInput> &
  LabelInfo;
export type SubFieldAddresses = Record<FieldNamesAddresses, FormInput> &
  LabelInfo;
export type SubFieldPasswords = Record<FieldNamesPasswords, FormInput> &
  LabelInfo;

export type RootField = {
  [RootFieldNames.GeneralInfo]: SubFieldGeneralInfo;
  [RootFieldNames.Verification]: SubFieldVerification;
  [RootFieldNames.Addresses]: SubFieldAddresses;
  [RootFieldNames.Passwords]: SubFieldPasswords;
};

export type InitFormikValues = Record<
  | FieldNamesGeneralInfo
  | FieldNamesVerification
  | FieldNamesAddresses
  | FieldNamesPasswords,
  string | Gender
>;

export type InitFormikValuesGetVerifyCode = Record<
  FieldNamesGeneralInfo | FieldNamesVerification,
  string | Gender
>;

export type ErrorFields = Partial<InitFormikValues>;
