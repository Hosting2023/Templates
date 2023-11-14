import { IsPrivateHouse } from '@/components/registration/maidRegistration2/constants/IsPrivateHouse';
import { ProfileType } from '@/components/registration/maidRegistration2/constants/ProfileType';
import { Gender } from '@/components/registration/signUp/form-model/sign-up.enum';

export interface EmailEntity {
  _id: string;
  email: string;
  isVerify: boolean;
  isMain: boolean;
}
export interface UsersProfiles {
  id: string;
  profileType: ProfileType;
  photo: string;
  site: string;
}
export interface MessengerEntity {
  _id: string;
  name: string;
}
export interface PhoneNumberEntity {
  _id: string;
  number: string;
  verified: MessengerEntity[];
  isMain: boolean;
}

export interface AddressEntity {
  _id: string;
  isPrivateHouse: IsPrivateHouse;
  fullAddress: string;
  apartmentNumber: string;
  entranceNumber: string;
  entranceCode: string;
  houseNumber?: string;
  latitude: string;
  city: string;
  country: string;
  longitude: string;
  isMain: boolean;
}
export interface UserWithProfiles {
  firstName: string;
  lastName: string;
  gender: Gender;
  dateOfBirth?: string;
  emails: EmailEntity[];
  phoneNumbers: PhoneNumberEntity[];
  photos: string[];
  addresses: AddressEntity[];
  profiles: UsersProfiles[];
}

export interface UserWithProfilesShort {
  firstName: string;
  lastName: string;
  photo: string;
}
