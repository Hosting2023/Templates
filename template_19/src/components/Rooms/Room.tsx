import React, {FC} from 'react';
import s from './Room.module.scss'
import {IRoomProps} from "@/types/types";
import Image from 'next/image'


const Room: FC<IRoomProps> = ( props) => {
	return (
		<div className={s.room}>
			<Image src={props.image} alt={`${props.roomName} photo`}/>
			<p className={s.text}>{props.roomName}</p>
		</div>
	);
};

export default Room;