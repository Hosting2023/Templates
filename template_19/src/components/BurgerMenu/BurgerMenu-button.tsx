import React from 'react';
import s from './BurgerMenuButton.module.scss'
import {IBurgerMenuButtonProps} from "@/types/types";

const BurgerMenuButton = (props: { buttonData: IBurgerMenuButtonProps }) => (
    <a href={props.buttonData.url} className={s.button}>{props.buttonData.text}</a>
);

export default BurgerMenuButton;