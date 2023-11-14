import { OptionsValuesType } from '@/components/lips/listboxOptions/interfaces/OptionsValuesType';
import { IsPrivateHouse } from '@/components/registration/maidRegistration2/constants/IsPrivateHouse';
import { ProfileType } from '@/components/registration/maidRegistration2/constants/ProfileType';
import { ScheduleDataProps } from '@/components/registration/maidRegistration2/extraInfo/schedule/table/Table';

import { TransportValueType } from '@/components/transportRadioGroup/interfaces/TransportValueType';

export interface CreateProfileDto {
  profileType: ProfileType;

  description: string;

  allergy: OptionsValuesType[];

  language: OptionsValuesType[];

  durationFromHomeToWork: string;

  durationFromWorkToWork: string;

  travelModeFromHomeToWork: TransportValueType | '';

  travelModeFromWorkToWork: TransportValueType | '';

  sites: string[] | [];

  fullAddress: string;

  isPrivateHouse: IsPrivateHouse;

  apartmentNumber: string;

  entranceNumber: string;

  entranceCode: string;

  isMain: boolean;

  address: string;

  avatar?: File;

  avatarUrl?: string;

  schedule: ScheduleDataProps[];

  oneOffOrderOptions: OptionsValuesType[];

  pricePerHour: string;

  transportFare: string;
}
