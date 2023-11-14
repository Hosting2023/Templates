'use client'
import React, {FC, useEffect, useState} from 'react';
import s from './WorkDescription.module.scss';
import WorkDescriptionCard from "@/components/WorkDescription/WorkDescription-card";
import {
    cardType,
    IInfoModalTextProps,
    IvritVersionProps,
    IWorkDescriptionCardProps,
    TypeWorkDescriptionCardsRender
} from "@/types/types";
import InfoModal from "@/components/InfoModal/InfoModal";
import classNames from "classnames";

import image1 from '@/public/WorkDescription/image1.png';
import image2 from '@/public/WorkDescription/image2.png';

const WorkDescription: FC<IvritVersionProps> = (props) => {
    const InfoModalTextProps: { cleanGasStove: IInfoModalTextProps, cleanTheFloors: IInfoModalTextProps } = {
        cleanGasStove: {
            title: 'how do i clean gas stove',
            text: ['Before starting to clean the stove, I have to make sure that all the burners are removed from it. Then, I put them in the sink and spray them with a degreasing agent. To clean the stove well, I need to spread the cleaner around so that it covers the entire surface. Next, I spray the cleaner onto the stove itself and scrub it with a sponge. \n' + 'I leave the cleaner on for a few minutes and thoroughly clean heavily soiled areas. After that, I remove the cleaner from the stove with a cloth and wipe it again until there are no traces of the', 'cleaner left. Caution is very important, as if the cleaner is not wiped well, it can eat away at the surface and leave spots. I wipe the surface dry so that no streaks are left, and then clean and wipe the burners before putting them back in place.\n' + 'If the stove that I am cleaning is made of enamel or gray metal surface, I must definitely ask the homeowner what cleaner to use. If I do not know how to clean the stove, I use simple dish soap, a very soft sponge, and a simple cloth.'],
            imgUrl: '/WorkDescription/cleanGasStoveModal.png'
        },
        cleanTheFloors: {
            title: 'how do i clean the floors',
            text: ['Before cleaning the room, I prepare it by moving everything that can be moved and clearing away any excess on the floor. Then I vacuum or sweep the floor. I go over all the corners, panels, and panel joints with a brush or vacuum. Next, I fill a bucket with a full column of water and add a capful of floor cleaner. It is important to remember to add soap only to a bucket that is already full of water and not to overdo the cleaning solution. I dip a cloth in the water and do not wring it out, but simply put it on the mop. I spread the water over the floor with this wet', 'cloth. If the floors need to be thoroughly cleaned, I wet the cloth several times to keep it moist but not waterlogged. Then I take off the cloth and put it back in the bucket of water. Using the rubber on the mop, I begin to collect the water into one puddle, which I will then collect separately. I wring out the cloth as dry as possible, put it on the mop, and begin to scrub the floor strip by strip. I try to scrub back and forth with strong, firm motions, drying it as much as possible. However, if I have ceramic floors that do not like a lot of water, I slightly wring out the cloth to clean the stone floor while not flooding the pores with water. The same applies to parquet flooring, but here I use a special parquet cleaner.'],
            imgUrl: '/WorkDescription/cleanTheFloorsModal.png'
        }
    }

    const InfoModalTextPropsIvrit: { cleanGasStove: IInfoModalTextProps, cleanTheFloors: IInfoModalTextProps } = {
        cleanGasStove: {
            title: 'איך אני מנקה תנור גז',
            text: ['לפני התחלת ניקוי הכיריים, עלי לוודא שכל השריפודים הוסרו מהכיריים. לאחר מכן אני מניחם בכיור ומזלף עליהם חומר ניקוי מסיר שומנים. כדי לנקות את הכיריים בצורה הטובה ביותר, עלי למרוח את החומר ניקוי כך שיכסה את כל המשטח. לאחר מכן אני מזלף את החומר ניקוי על הכיריים עצמם ומתקפל עם מספוג.', 'אני משאיר את החומר ניקוי על הכיריים למספר דקות ומנקה בצורה מקיפה אזורים עמוסי שומן. לאחר מכן אני מסיר את החומר ניקוי מהכיריים בעזרת מטליית ניקוי ומנגב את השטח עד שאין עוד עקבות של החומר הניקוי. זה חשוב להיות זהירים כי אם החומר הניקוי לא מנוקה היטב, הוא יכול לפגוע במשטח ולהשאיר כתמים. אני מנגב את המשטח יבש כך שאין סימני שטיפה נותרים, ואז אני מנקה ומנגב את השריפודים לפני שאני מחזיר אותם למקומם.', 'אם הכיריים שאני מנקה עשויים מציפוי אינמל או ממשטח מתכת אפור, עלי לוודא לשאול את בעל הבית איזו חומר ניקוי להשתמש. אם איננ.'],
            imgUrl: '/WorkDescription/cleanGasStoveModal.png'
        },
        cleanTheFloors: {
            title: 'איך אני מנקה את הרצפות',
            text: ['לפני שאני מתחיל לנקות את החדר, אני מכין אותו על ידי הזזת כל מה שניתן וניקוי הקרקעות מכל עודף. לאחר מכן אני מנגב או מטאטא את הרצפה. אני עובר על כל הפינות, הפאנלים והחיבורים עם מברשת או מטאטא. לאחר מכן אני ממלא דלי במים מלאים ומוסיף מידה של מנקה רצפות. חשוב לזכור להוסיף סבון רק לדלי שכבר מלא במים ולא להגזים עם מכמות התרסיס. אני מטבל את המטלית במים ולא מסחט אותה, אלא פשוט מניח אותה על המטאטא. אני מפזר את המים על הרצפה עם המטלית הרטובה הזו. אם הרצפות צריכות להיות מנוקות בצורה מקיפה, אני מרטיב את המטלית מספר פעמים כדי לשמור על רטיבות תמידית ולא להשקיע מים רבים מדי. לאחר מכן אני מוציא את המטלית ומחזיר אותה לדלי המים. באמצעות הגומי על המטאטא, אני מתחיל לאסוף את המים לפודל אחד, אותו אני אצבע לפני כל הצבעת חדשה. אני מסחט את המטלית בכל פעם כך שהיא יבשה ככל האפשר, מניח אותה על המטאטא, ומתחיל לצח.'],
            imgUrl: '/WorkDescription/cleanTheFloorsModal.png'
        }
    }

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [modalTextInfo, setModalTextInfo] = useState<IInfoModalTextProps>(InfoModalTextProps[cardType.cleanGasStove])

    const openModal = (cardType: cardType) => {
        setModalTextInfo(props.langIvrit ? InfoModalTextPropsIvrit[cardType] : InfoModalTextProps[cardType])
        setModalIsOpen(true);
    }

    const workDescriptionCardsData: IWorkDescriptionCardProps[] = [
        {
            image: image1,
            title: 'how do i clean gas stove',
            text: 'Before starting to clean the stove, I have to make sure that all the burners are removed from it. Then, I put them in the sink and spray them with a degreasing agent. To clean',
            openModalFunc: openModal,
            cardType: cardType.cleanGasStove
        },
        {
            image: image2,
            title: 'how do i clean the floors',
            text: 'Before cleaning the room, I prepare it by moving everything that can be moved and clearing away any excess on the floor. Then I vacuum or sweep the floor. I go over',
            openModalFunc: openModal,
            cardType: cardType.cleanTheFloors
        }
    ]

    const workDescriptionCardsDataIvrit: IWorkDescriptionCardProps[] = [
        {
            image: image1,
            title: 'איך אני מנקה תנור גז',
            text: 'לפני שמתחילים לנקות את הכיריים, אני צריך לוודא שכל המבערים מוסרים ממנו. לאחר מכן, שמתי אותם בכיור ומרסס אותם בחומר מסיר שומנים. לנקות',
            openModalFunc: openModal,
            cardType: cardType.cleanGasStove
        },
        {
            image: image2,
            title: 'איך אני מנקה הקומות',
            text: 'לפני ניקוי החדר, אני מכינה אותו על ידי הזזת כל מה שניתן להזיז וניקוי עודפים על הרצפה. אחר כך אני שואב או מטאטא את הרצפה. אני עובר',
            openModalFunc: openModal,
            cardType: cardType.cleanTheFloors
        }
    ]

    const workDescriptionCardsRender: TypeWorkDescriptionCardsRender = (workDescriptionCardsData) => {
        return workDescriptionCardsData.map((el, id) => <WorkDescriptionCard key={id} workDescriptionCardsData={el}
                                                                       langIvrit={props.langIvrit}/>)
    }

    let componentClassName = classNames({
        [s.work_description as string]: true,
        [s.ivrit_version as string]: props.langIvrit
    })

    useEffect(() => {
        let body = document.getElementById('body');
        modalIsOpen ? body!.classList.add('fix_scroll') : body!.classList.remove('fix_scroll')
    }, [modalIsOpen])

    return (
        <div className={componentClassName}>
            <div className={s.content}>
                {workDescriptionCardsRender(props.langIvrit ? workDescriptionCardsDataIvrit : workDescriptionCardsData)}
                <InfoModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} modalTextInfo={modalTextInfo}
                           langIvrit={props.langIvrit}/>
            </div>
        </div>
    );
};

export default WorkDescription;