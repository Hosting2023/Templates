// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import photo from '@/public/assets/photos_mock/photo1.jpg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import photo2 from '@/public/assets/photos_mock/photo2.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import photo3 from '@/public/assets/photos_mock/photo3.png';
import { SearchPeopleType } from '@/types/SearchPeopleType';

export const MOCK_PEOPLE: SearchPeopleType[] = [
  { id: 1, photo, fullName: 'Rick Nilson' },
  { id: 2, photo: photo2, fullName: 'Monica Bellucci' },
  { id: 3, photo: photo3, fullName: 'Jack Sparrow' },
  { id: 4, photo: photo2, fullName: 'Rachel Grin' },
];
