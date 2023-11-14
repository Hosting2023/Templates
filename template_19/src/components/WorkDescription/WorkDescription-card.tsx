import React from 'react';
import s from "./WorkDescription-card.module.scss";
import Image from "next/image";
import {IWorkDescriptionCardProps} from "@/types/types";
import classNames from "classnames";

const WorkDescriptionCard = (props: { workDescriptionCardsData: IWorkDescriptionCardProps, langIvrit: boolean }) => {
    const closeModal = () => {
        props.workDescriptionCardsData.openModalFunc(props.workDescriptionCardsData.cardType)
    }

    let componentClassName = classNames({
        [s.card as string]: true,
        [s.ivrit_version as string]: props.langIvrit
    })

    return (
        <div className={componentClassName}>
            <Image src={props.workDescriptionCardsData.image} alt={'Work description icon'}/>
            <div className={s.text_part}>
                <div className={s.description}>
                    <h3 className={s.title}>{props.workDescriptionCardsData.title}</h3>
                    <p className={s.text}>{props.workDescriptionCardsData.text}</p>
                </div>
                <button className={s.button} onClick={closeModal}>{props.langIvrit ? 'קרא עוד' : 'read more'}</button>
            </div>
        </div>
    );
};

export default WorkDescriptionCard;