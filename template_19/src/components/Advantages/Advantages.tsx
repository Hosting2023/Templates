import React, {FC} from 'react';
import s from './Advantages.module.scss'
import {IAdvantagesCardProps, IvritVersionProps, TypeAdvantagesCardsRender} from "@/types/types";
import AdvantagesCard from "@/components/Advantages/Advantages-card";
import classNames from "classnames";

import imgCard1 from '@/public/Advantages/imgCard1.png';
import imgCard2 from '@/public/Advantages/imgCard2.png';
import imgCard3 from '@/public/Advantages/imgCard3.png';
import imgCard4 from '@/public/Advantages/imgCard4.png';

const  Advantages: FC<IvritVersionProps> = (props) => {
	const advantagesCardsData: IAdvantagesCardProps[] = [
		{
			image: imgCard1,
			title: 'Professional cleaning',
			text: 'use professional-grade cleaning equipment and products'
		},
		{
			image: imgCard2,
			title: 'Flexibility',
			text: 'providing cleaning services at a convenient time for you'
		},
		{
			image: imgCard3,
			title: 'Convenient schedule',
			text: 'maid can provide regular cleaning schedules'
		},
		{
			image: imgCard4,
			title: 'Satisfaction guarantee',
			text: 'the maid will work to solve any problem'
		}
	]

	const advantagesCardsDataIvrit: IAdvantagesCardProps[] = [
		{
			image: imgCard1,
			title: 'שביעות רצון להבטיח',
			text: 'המאבק יעבוד לפתור כל בעיה'
		},
		{
			image: imgCard2,
			title: 'גְמִישׁוּת',
			text: 'סיפק שירותי ניקיון בזמן הנוח לך'
		},
		{
			image: imgCard3,
			title: 'נוֹחַ לוח זמניםe',
			text: 'המאבק יכולה לספק לוחות זמנים קבועים לניקיון'
		},
		{
			image: imgCard4,
			title: 'מקצועי ניקוי',
			text: 'השתמש בציוד ובמוצרי ניקיון מקצועיים'
		}
	]

	const advantagesCardsRender: TypeAdvantagesCardsRender = (advantagesCardsData ) => {
		return advantagesCardsData.map((el, id) => <div className={s.card}><AdvantagesCard key={id} image={el.image} title={el.title} text={el.text} langIvrit={props.langIvrit}/></div>)
	}

	let componentClassName = classNames({
		[s.advantages as string]: true,
		[s.ivrit_version as string]: props.langIvrit
	})

	return (
		<div className={componentClassName}>
			{advantagesCardsRender(props.langIvrit ? advantagesCardsDataIvrit : advantagesCardsData)}
		</div>
	);
};

export default Advantages;