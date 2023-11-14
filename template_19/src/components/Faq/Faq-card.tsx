import React, {FC} from 'react';
import s from './Faq-card.module.scss'
import {IFaqCardProps} from "@/types/types";
import classNames from "classnames";

const FaqCard: FC<IFaqCardProps> = (props) => {
    let componentClassName = classNames({
        [s.card as string]: true,
        [s.ivrit_version as string]: props.langIvrit
    })

    return (
        <div className={componentClassName}>
            <h2 className={s.question}>{props.question}</h2>
            <p className={s.answer}>{props.answer}</p>
        </div>
    );
};

export default FaqCard;