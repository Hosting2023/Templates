'use client'
import React, {FC, useState} from 'react';
import s from './MainScreen.module.scss'
import Header from "@/components/Header/Header";
import classNames from "classnames";
import {IvritVersionProps} from "@/types/types";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";

const MainScreen: FC<IvritVersionProps> = (props) => {
	let componentStyle = classNames({
		[s.main_screen as string]: true,
		[s.ivrit_style as string]: props.langIvrit
	})

	const [burgerMenuShowing, setBurgerMenuShowing] = useState<boolean>(false)

	const openBurgerMenu = () => {
		setBurgerMenuShowing(true)
	}

	return (
		<div className={componentStyle}>
			<Header langIvrit={props.langIvrit}/>
			<div className={s.content}>
				<button className={s.btn_burger_menu} onClick={openBurgerMenu}>
					<div className={s.item}></div>
					<div className={s.item}></div>
					<div className={s.item}></div>
				</button>
				<h1 className={s.title}>{props.langIvrit ? 'מותאם אישית עוזרת שירותים' : 'Personalized Maid Services'}</h1>
				<button className={s.button}>{props.langIvrit ? 'לוח זמנים' : 'schedule'}</button>
			</div>
			<BurgerMenu burgerMenuShowing={burgerMenuShowing} setBurgerMenuShowing={setBurgerMenuShowing}/>
		</div>
	);
};

export default MainScreen;