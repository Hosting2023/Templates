import photo_1 from '@/assets/photos_reviews/photo_1.png';
import photo_2 from '@/assets/photos_reviews/photo_2.png';
import photo_3 from '@/assets/photos_reviews/photo_3.png';
import photo_4 from '@/assets/photos_reviews/photo_4.png';
import { StaticImageData } from 'next/image';

export interface IReviewsData {
  imageSrc: StaticImageData;
  name: string;
  review: string;
}

export const reviewsData: IReviewsData[] = [
  {
    imageSrc: photo_1,
    name: 'Agnes Armstrong',
    review:
      'An incredible feeling of relief and joy when you return home after work ' +
      'and you are greeted by the impeccable cleanliness created by the maid. ' +
      'It not only cleans at the highest level, but also gives a special atmosphere ' +
      'of coziness and comfort. I recommend her services to anyone.',
  },
  {
    imageSrc: photo_2,
    name: 'Agnes Armstrong',
    review:
      'An incredible feeling of relief and joy when you return home after work ' +
      'and you are greeted by the impeccable cleanliness created by the maid. ' +
      'It not only cleans at the highest level, but also gives a special atmosphere ' +
      'of coziness and comfort. I recommend her services to anyone.',
  },
  {
    imageSrc: photo_3,
    name: 'Agnes Armstrong',
    review:
      'An incredible feeling of relief and joy when you return home after work ' +
      'and you are greeted by the impeccable cleanliness created by the maid. ' +
      'It not only cleans at the highest level, but also gives a special atmosphere ' +
      'of coziness and comfort. I recommend her services to anyone.',
  },
  {
    imageSrc: photo_4,
    name: 'Agnes Armstrong',
    review:
      'An incredible feeling of relief and joy when you return home after work ' +
      'and you are greeted by the impeccable cleanliness created by the maid. ' +
      'It not only cleans at the highest level, but also gives a special atmosphere ' +
      'of coziness and comfort. I recommend her services to anyone.',
  },
];

export const reviewsDataHeb: IReviewsData[] = [
  {
    imageSrc: photo_1,
    name: 'אגנס ארמסטרונג',
    review:
      'הרגשה מדהימה של הקלה ושמחה כשאתם חוזרים הביתה אחרי' +
      ' העבודה ומקבל את פניכם הניקיון ללא דופי שיצרה העוזרת. הוא לא רק מנקה ברמה הגבוהה ' +
      'ביותר, אלא גם נותן אווירה מיוחדת של נעימות ונוחות. אני ממליץ על שירותיה לכל אחד.',
  },
  {
    imageSrc: photo_2,
    name: 'אגנס ארמסטרונג',
    review:
      'תמיד הייתי סקפטי לגבי שירותי' +
      ' חדרנית, אבל הכל השתנה כשהשתמשתי לראשונה בשירותיהם. העוזרת הפגינה תשומת' +
      ' לב מדהימה לפרטים והפכה את הבית שלי לנקי ומסודר להפליא. היא הייתה אדיבה' +
      ', אדיבה ומקצועית. אני כבר לא יכול לדמיין את חיי בלי עזרתה. עבודה טובה!',
  },
  {
    imageSrc: photo_3,
    name: 'תרזה ווילסון',
    review:
      'הזמנתי ניקיון לאחר המעבר, והעוזרת עשתה נס! הדירה נראתה חדשה לגמרי -' +
      ' ללא אבק, ללא עקבות של עבודות בנייה וללא בלגן. היא עבדה במהירות וביעילות ' +
      'מבלי להחמיץ אף פרט. אני ממליץ עליה לכל מי שמחפש סייעת אמינה לאחר מעבר דירה!',
  },
  {
    imageSrc: photo_4,
    name: 'אגנס ארמסטרונג',
    review:
      'הרגשה מדהימה של הקלה ושמחה כשאתם חוזרים הביתה אחרי' +
      ' העבודה ומקבל את פניכם הניקיון ללא דופי שיצרה העוזרת. הוא לא רק מנקה ברמה הגבוהה ' +
      'ביותר, אלא גם נותן אווירה מיוחדת של נעימות ונוחות. אני ממליץ על שירותיה לכל אחד.',
  },
];
