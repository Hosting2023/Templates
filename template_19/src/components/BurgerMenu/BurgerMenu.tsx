import React, {Dispatch, SetStateAction} from 'react';
import s from './BurgerMenu.module.scss';
import BurgerMenuButton from "@/components/BurgerMenu/BurgerMenu-button";
import {IBurgerMenuButtonProps} from "@/types/types";
import classNames from "classnames";

const BurgerMenu = (props: { burgerMenuShowing: boolean, setBurgerMenuShowing: Dispatch<SetStateAction<boolean>> }) => {
    const renderButtons = (buttonsData: IBurgerMenuButtonProps[]) => {
        return buttonsData.map((el, id) => <BurgerMenuButton key={id} buttonData={el}/>)
    }

    const buttonsData: IBurgerMenuButtonProps[] = [
        {
            text: 'WHATSAPP',
            url: '#'
        },
        {
            text: 'TELEGRAM',
            url: '#'
        },
        {
            text: 'VIBER',
            url: '#'
        }
    ]

    let menuClassName = classNames({
        [s.menu as string]: true,
        [s.hide as string]: !props.burgerMenuShowing
    })

    const closeBurgerMenu = () => {
        props.setBurgerMenuShowing(false)
    }

    return (
        <div className={menuClassName} onClick={closeBurgerMenu}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <button className={s.button_close} onClick={closeBurgerMenu}>
                    <div className={s.item}></div>
                </button>
                <div className={s.buttons}>
                    {renderButtons(buttonsData)}
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;