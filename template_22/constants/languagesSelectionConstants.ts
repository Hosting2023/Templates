import englishFlag from '@/assets/icons/englishFlag.svg';
import israelFlag from '@/assets/icons/israelFlag.svg';
import russianFlag from '@/assets/icons/russianFlag.svg';
import { ISelectItem } from '@/components/lips/customSelect/Default/interfaces/ISelectItem';

export const LANGUAGES: ISelectItem[] = [
  { id: 1, text: 'En', icon: englishFlag as unknown as string },
  { id: 2, text: 'He', icon: israelFlag as unknown as string },
  { id: 3, text: 'Ru', icon: russianFlag as unknown as string },
];
