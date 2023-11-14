import photo_pro from '@/assets/icons_benefits/PRO.svg';
import photo_time from '@/assets/icons_benefits/time.svg';
import photo_handshake from '@/assets/icons_benefits/handshake.svg';
import photo_heart from '@/assets/icons_benefits/heart.svg';

import { ColumnData } from '@/components/benefits';

export const MOCK_BENEFITS_DATA: ColumnData[] = [
  {
    imageSrc: photo_pro,
    title: 'Professionalism',
    text: 'The maid  knows effective methods and techniques to keep your home spotlessly clean and tidy.',
  },
  {
    imageSrc: photo_time,
    title: 'Time saving',
    text: 'By hiring a maid, you free yourself from having to do the cleaning yourself. ',
  },
  {
    imageSrc: photo_handshake,
    title: 'Personalized approach',
    text: 'You can discuss your special requirements with her and she will pay attention to every detail so that your home looks the way you want.',
  },
  {
    imageSrc: photo_heart,
    title: 'Comfort',
    text: 'The maid takes care of every detail to make you feel relaxed and enjoy your space without having to worry about cleaning.',
  },
];
