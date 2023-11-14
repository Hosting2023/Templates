import React, {FC} from 'react';
import s from './Header.module.scss'
import {IHeaderCardProps, IvritVersionProps} from "@/types/types";
import HeaderCard from "@/components/Header/Header-card";

const Header: FC<IvritVersionProps> = (props) => {
	const headerCardRender = (cardsData: IHeaderCardProps[]) => {
		return cardsData.map((el, id) => <HeaderCard key={id} cardData={el}/>)
	}

	const cardInfo: IHeaderCardProps[] = [
		{
			btnText: 'WHATSAPP'
		},
		{
			btnText: 'TELEGRAM'
		},
		{
			btnText: 'VIBER'
		}
	]

	const cardInfoIvrit: IHeaderCardProps[] = [
		{
			btnText: 'ווטסאפ'
		},
		{
			btnText: 'מִברָק'
		},
		{
			btnText: 'ויבר'
		}
	]

	return (
		<div className={s.header}>
			<ul className={s.links_list}>
				{headerCardRender(props.langIvrit ? cardInfoIvrit : cardInfo)}
			</ul>
		</div>
	);
};

export default Header;