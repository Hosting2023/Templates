import React, { FC, useContext } from 'react';

import styles from './styles.module.scss';
import { AppContext } from '../../pages/_app';

const AboutMe: FC = () => {
  const Heb = useContext(AppContext);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.header}>{!Heb ? 'About me' : 'עליי'}</h2>
        {Heb && (
          <p className={styles.text}>
            שלום! אני אמנדה - העוזרת האמינה שלך ביצירת בית מושלם ונוח. התשוקה
            שלי לסדר, תשומת לב לפרטים ויחס ידידותי יאפשרו לכם ליהנות מהחיים מבלי
            לדאוג למטלות הבית. המטרה שלי היא להפוך את הבית שלכם לגן עדן אמיתי
            למנוחה ורגיעה. אני אוהב לטפל בכל פינה, ליצור טוהר והרמוניה מושלמת.
            בין אם אתם זקוקים לניקוי יומיומי, ניקוי עמוק או סיוע בכביסה, אני
            מוכן לעשות את הקילומטר הנוסף כדי לשמור על מראה הבית שלכם רענן
            ומבריק. יש לי את המקצועיות והניסיון שמאפשרים לי לבצע את עבודתי בצורה
            יעילה. אבל לי זה הרבה יותר חשוב מסתם ניקוי והברקה.
          </p>
        )}
        {!Heb && (
          <div>
            <p className={styles.text}>
              Hello! I am Amanda - your reliable assistant in creating a perfect
              and comfortable home. My passion for order, attention to detail
              and friendly approach will allow you to enjoy life without
              worrying about household chores.
            </p>
            <p className={styles.text}>
              My goal is to turn your home into a real paradise for rest and
              relaxation. I love to take care of every corner, creating perfect
              purity and harmony. Whether you need daily cleaning, deep cleaning
              or laundry assistance, I&apos;m ready to go the extra mile to keep
              your home looking fresh and shiny.
            </p>
            <p className={styles.text}>
              I have the professionalism and experience that allows me to do my
              job effectively. But for me it is much more important than just
              cleaning and polishing.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
