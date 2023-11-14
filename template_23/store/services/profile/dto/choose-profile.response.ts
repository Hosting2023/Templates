import { BlacklistType } from '@/components/blacklist/interfaces/BlacklistType';
import { ProfileType } from '@/components/orders/interfaces/ProfileType';
import { Allergy } from '@/components/registration/maidRegistration2/constants/Allergy';
import { Language } from '@/components/registration/maidRegistration2/constants/Language';
import { OneOffOrderOption } from '@/components/registration/maidRegistration2/constants/OneOffOrderOption';
import { TravelMode } from '@/components/registration/maidRegistration2/constants/TravelMode';
import { ScheduleDataProps } from '@/components/registration/maidRegistration2/extraInfo/schedule/table/Table';

import { ReviewType } from '@/components/reviews/interfaces/ReviewType';

export interface ChooseProfileResponseDto {
  id: string;
  userId: string;
  profileType: ProfileType;
  allergy: Allergy;
  language: Language;
  description: string;
  sites: string[];
  photos: string[];
  durationFromHomeToWork?: string;
  travelModeFromHomeToWork?: TravelMode;
  durationFromWorkToWork?: string;
  travelModeFromWorkToWork?: TravelMode;
  oneOffOrderOptions?: OneOffOrderOption[];
  pricePerHour: string;
  transportFare: string;
  orders: [];
  blacklist: BlacklistType[];
  reviews: ReviewType[];
  leftReviews: ReviewType[];
  schedule: ScheduleDataProps;
  temporaryWorks: [];
  absences: [];
}
