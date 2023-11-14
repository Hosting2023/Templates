import React, {FC} from 'react';
import s from "@/components/Advantages/Advantages-card.module.scss";
import Image from "next/image";
import {IAdvantagesCardProps} from "@/types/types";
import classNames from "classnames";

const AdvantagesCard: FC<IAdvantagesCardProps> = (props) => {
	let componentClassName = classNames({
		[s.card as string]: true,
		[s.ivrit_version as string]: props.langIvrit
	})

	return (
		<div className={componentClassName}>
			<Image src={props.image} alt={`Advantage icon`}/>
			<div className={s.text_part}>
				<h3 className={s.title}>{props.title}</h3>
				<p className={s.text}>{props.text}</p>
			</div>
		</div>
	);
};

export default AdvantagesCard;