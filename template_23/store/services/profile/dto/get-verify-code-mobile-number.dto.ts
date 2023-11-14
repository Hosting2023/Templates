import { Messengers } from '@/components/registration/maidRegistration2/constants/Messengers';

export interface GetVerifyCodeMobileNumberDto {
  mobileNumber: string;
  messenger: Messengers;
}
