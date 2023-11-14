import photo_pro_heb from '@/assets/icons_benefits/PRO_heb.svg';
import photo_time from '@/assets/icons_benefits/time.svg';
import photo_handshake from '@/assets/icons_benefits/handshake.svg';
import photo_heart from '@/assets/icons_benefits/heart.svg';

import { ColumnData } from '@/components/benefits';

export const MOCK_BENEFITS_DATA_HEB: ColumnData[] = [
  {
    imageSrc: photo_pro_heb,
    title: 'מִקצוֹעִיוּת',
    text: 'העוזרת מכירה שיטות וטכניקות יעילות לשמור על ביתכם נקי ומסודר ללא רבב.',
  },
  {
    imageSrc: photo_time,
    title: 'חוסך בזמן',
    text: 'על ידי שכירת עוזרת, אתה משחרר את עצמך מהצורך לבצע את הניקיון בעצמך. ',
  },
  {
    imageSrc: photo_handshake,
    title: 'גישה אישית',
    text: 'תוכלו לדון איתה על הדרישות המיוחדות שלכם והיא תשים לב לכל פרט כדי שהבית שלכם יראה כמו שאתם רוצים.',
  },
  {
    imageSrc: photo_heart,
    title: 'נוחות',
    text: 'העוזרת דואגת לכל פרט כדי לגרום לכם להרגיש רגועים וליהנות מהחלל שלכם מבלי שתצטרכו לדאוג לניקיון.',
  },
];
