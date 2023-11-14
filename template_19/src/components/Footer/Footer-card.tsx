import React, {FC} from 'react';
import s from './Footer-card.module.scss';
import Image from "next/image";
import {IFooterCard} from "@/types/types";

const FooterCard: FC<IFooterCard> = (props ) => {
    return (
        <div className={s.card}>
            <Image src={props.image} alt={`${props.btnText} icon`}/>
            <button className={s.button}>{props.btnText}</button>
        </div>
    );
};

export default FooterCard;