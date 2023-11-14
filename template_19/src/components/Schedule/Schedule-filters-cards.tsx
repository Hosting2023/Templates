import React from 'react';
import s from "./Schedule.module.scss";
import markerImg from '@/public/Schedule/marker.svg'
import Image from "next/image";
import {IScheduleFiltersCardsButtonsInfo, IScheduleFiltersCardsProps} from "@/types/types";
import classNames from "classnames";

const ScheduleFiltersCards = (props: {cardsData: IScheduleFiltersCardsProps}) => {
    const cleaningClassName = classNames({
        [s.cleaning_visible as string]: props.cardsData.cleaningCardVisibility
    })

    const buttonsRender = (buttonsData: IScheduleFiltersCardsButtonsInfo[]) => {
        return buttonsData.map((el, id) => <button key={id} className={s.button_radio} onClick={() => handleClick(el.type)}><div className={`${s.button_marker} ${s[el.type]}`}><Image src={markerImg} alt={'Marker'}/></div>{el.text}</button>)
    }

    const handleClick = (value: string) => {
        value === props.cardsData.stateChoose ? props.cardsData.stateChooseChanger(null) : props.cardsData.stateChooseChanger(value)
    }

    return (
        <label className={`${s[`label_${props.cardsData.type}`]} ${cleaningClassName}`}>
            <p className={s.label_text}>{props.cardsData.text}</p>
            <div className={classNames([s.buttons as string], {[s[props.cardsData.stateChoose!] as string]: props.cardsData.stateChoose})}>
                {buttonsRender(props.cardsData.buttons)}
            </div>
        </label>
    );
};

export default ScheduleFiltersCards;