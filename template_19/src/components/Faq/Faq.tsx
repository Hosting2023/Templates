import React, {FC} from 'react';
import s from './Faq.module.scss'
import FaqCard from "@/components/Faq/Faq-card";
import {IFaqCardProps, IvritVersionProps, TypeFaqCardsRender} from "@/types/types";
import classNames from "classnames";

const Faq: FC<IvritVersionProps> = (props) => {
    const faqCardData: IFaqCardProps[] = [
        {
            question: 'What does your maid service include?',
            answer: 'My maid services include a range of housekeeping and cleaning jobs such as dusting, vacuuming, mopping, cleaning bathrooms and kitchens, laundry, and other tasks as requested by the client.'
        },
        {
            question: 'Are your cleaning products and environmentally friendly?',
            answer: 'Yes, i use high-quality cleaning products and equipment that are safe for use in homes and offices. I prioritize environmentally friendly options whenever possible.'
        },
        {
            question: 'Do I need to provide any cleaning supplies or equipment?',
            answer: 'No, i provide all of the necessary cleaning supplies and equipment. However, if you have specific products or tools that you would like me to use, I will be happy to accommodate your requests.'
        },
        {
            question: 'How do you price your services?',
            answer: 'The cost of my services depends on the size of your home or office, the specific cleaning tasks you need, and the frequency of visits.\n'
        }
    ]

    const faqCardDataIvrit: IFaqCardProps[] = [
        {
            question: 'מה כלול בשירותי המאבק שלכם?',
            answer: 'השירותים שלי כמאבק כוללים מגוון עבודות בית וניקיון כגון ניקיון אבק, שטיפת משטחים, שטיפת מטבחים ושירותי כביסה, ומשימות נוספות כפי שנדרשות על ידי הלקוח.'
        },
        {
            question: 'האם מוצרי הניקיון שלכם ידידותיים לסביבה?',
            answer: 'כן, אני משתמש/ת במוצרי ניקיון וציוד איכותיים הבטוחים לשימוש בבתים ומשרדים. אני מעדיפ/ה אפשרויות ידידותיות לסביבה ככל האפשר.'
        },
        {
            question: 'האם יש צורך לספק כלי ניקיון או ציוד?',
            answer: 'לא, אני מספק/ת את כל כלי הניקיון והציוד הנדרשים. אם יש לכם מוצרים או כלי ספציפיים שאתם מעוניינים שאשת המאבק תשתמש בהם, אני אשמח להתאים את השירות לצרכים שלכם.'
        },
        {
            question: 'איך מתבצע התמחור של השירותים שלכם?',
            answer: 'המחיר של השירותים שלי תלוי בגודל הבית או המשרד שלכם, במשימות הניקיון הספציפיות שאתם צריכים, ובתדירות הביקורים. נא ליצור איתי קשר לקבלת הצעת מחיר אישית לפי צרכי הלקוח.'
        }
    ]

    const faqCardsRender: TypeFaqCardsRender = (faqCardData) => {
        return faqCardData.map((el, id) => <FaqCard key={id} question={el.question} answer={el.answer} langIvrit={props.langIvrit}/>)
    }

    let componentClassName = classNames({
        [s.faq as string]: true,
        [s.ivrit_version as string]: props.langIvrit
    })

    return (
        <div className={componentClassName}>
            {faqCardsRender(props.langIvrit ? faqCardDataIvrit : faqCardData)}
        </div>
    );
};

export default Faq;