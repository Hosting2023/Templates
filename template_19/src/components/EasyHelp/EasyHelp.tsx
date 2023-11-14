import React, {FC} from 'react';
import s from './EasyHelp.module.scss';
import Image from "next/image";
import {IvritVersionProps} from "@/types/types";
import classNames from "classnames";

import image from '@/public/EasyHelp/image.png';

const EasyHelp: FC<IvritVersionProps> = (props) => {
    let componentClassName = classNames({
        [s.easy_help as string]: true,
        [s.ivrit_version as string]: props.langIvrit
    })

    return (
        <div className={componentClassName}>
            <Image src={image} alt={'Easy help image'}/>
            <div className={s.text_part}>
                <h2 className={s.title}>{props.langIvrit ? 'עֶזרָה ניקוי קַל' : 'Easy cleaning help'}</h2>
                <p className={s.text}>{props.langIvrit ? 'השאר לי את כל עבודות הבית הקשות והלא אהובות ותיהנה מהתוצאות ומהזמן שלך' : 'leave all the difficult and unloved housework to me and enjoy the results and your time'}</p>
            </div>
        </div>
    );
};

export default EasyHelp;