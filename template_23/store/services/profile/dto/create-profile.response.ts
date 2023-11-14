import { BlacklistType } from '@/components/blacklist/interfaces/BlacklistType';

export interface ICreateProfileResponse {
  id: string;
  userId: string;
  profileType: string;
  description: string;
  durationFromHomeToWork: string;
  travelModeFromHomeToWork: string;
  durationFromWorkToWork: string;
  travelModeFromWorkToWork: string;
  sites: string[];
  photos: string[];
  address: string[];
  schedule: [
    {
      start: '10:00';
      end: '22:00';
      futureOrders: [];
      createdAt: '2023-05-22T05:07:08.896Z';
    },
  ];
  oneOffOrderOptions: 'window-cleaning' | 'regular-cleaning' | 'after-repair';
  pricePerHour: string;
  absence: [];
  blacklist: BlacklistType[];
  review: [];
  createdAt: Date;
}
