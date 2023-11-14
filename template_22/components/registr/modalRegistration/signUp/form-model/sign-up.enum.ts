export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export enum FieldNamesGeneralInfo {
  FirstName = 'firstName',
  LastName = 'lastName',
  Gender = 'gender',
  Birth = 'dateOfBirth',
}

export enum FieldNamesVerification {
  Email = 'email',
  MobileNumber = 'mobileNumber',
}

export enum FieldNamesAddresses {
  Address = 'address',
  House = 'house',
  IsPrivateHouse = 'isPrivateHouse',
  ApartmentNumber = 'apartmentNumber',
  EntranceNumber = 'entranceNumber',
  EntranceCode = 'entranceCode',
}

export enum FieldNamesPasswords {
  Password = 'password',
  PasswordConfirmation = 'passwordConfirmation',
}

export enum RootFieldNames {
  GeneralInfo = 'generalInfo',
  Verification = 'verification',
  Addresses = 'addresses',
  Passwords = 'passwords',
}

export enum IsConfirmVerifyCode {
  Default = 'default',
  Fulfilled = 'fulfilled',
  Reject = 'rejected',
  Pending = 'pending',
  ConnectionError = 'connection-error',
}

export enum IsConfirmVerifyCodeEvent {
  SendVerificationCode = 'send-verification-code',
}
