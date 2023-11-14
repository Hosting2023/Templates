import React from 'react';
import s from "./Header-card.module.scss";
import {IHeaderCardProps} from "@/types/types";

const HeaderCard = ({ cardData }: { cardData: IHeaderCardProps }) => {
    return (
        <li className={s.item}>
            <a href="#">{cardData.btnText}</a>
        </li>
    );
};

export default HeaderCard;