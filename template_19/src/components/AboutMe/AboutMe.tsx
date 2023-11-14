'use client'
import React, {FC, useEffect, useState} from 'react';
import s from './AboutMe.module.scss';
import Image from "next/image";
import image from '@/public//AboutMe/image.png'
import InfoModal from "@/components/InfoModal/InfoModal";
import {IInfoModalTextProps, IvritVersionProps} from "@/types/types";
import classNames from "classnames";

const AboutMe: FC<IvritVersionProps> = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

	const openModal = () => {
		setModalIsOpen(true)
	}

	const modalTextInfo: IInfoModalTextProps = {
		title: 'about me',
		text: ['Hello! I work as a maid and I would like to share some of my duties and work experience with you.\n' + 'My main responsibility is to ensure that the rooms or apartments are clean and cozy. This means that my duties include regular changing of bedding and towels, cleaning of rooms, wiping surfaces and windows, and stocking all necessary items. I interact with customers politely and friendly, always ready to assist with any questions. In addition, I check the functionality of all equipment, such as whether the lights are working and more.', 'I am a true professional in my work, and I love my job because it gives me the opportunity to improve your life. I also find time for my hobbies outside of work, which include reading, practicing yoga, and spending time with family and friends. I believe that being a maid requires a lot of hard work and energy, but it\'s worth it to know that I make your life more comfortable and enjoyable.'],
		imgUrl: '/AboutMe/aboutMeModal.png'
	}

	const modalTextInfoIvrit: IInfoModalTextProps = {
		title: 'עליי',
		text: ['שלום! אני עובדת כמשרתת בית ואשמח לחלוק את חוויות העבודה והחובות שלי איתך .האחריות העיקרית שלי היא לוודא שהחדרים או הדירות נקיים ונעימים לשהייה. זה כולל החלפת מצעים ומגבות בקביעות, ניקוי החדרים, מחיקת משטחים וחלונות, ומשלימה את כל הפריטים הנחוצים. אני מתקשרת עם הלקוחות בצורה ידידותית ומכבדת, תמיד מוכנה לסייע בכל שאלה. בנוסף, אני בודקת את פעילות כל הציוד, כמו לדוגמה אם התאורה פועלת ועוד. אני מקצועית מובהקת בעבודתי, ואני אוהבת את העבודה שלי מכיוון שהיא נותנת לי את ההזדמנות לשפר את חיי הלקוחות. גם מחוץ לעבודה, אני מוצאת זמן לתחביבים שלי, כמו קריאה, יוגה והתאמה למשפחה וחברים. אני מאמינה שהיות משרתת בית דורשת המון עבודה ואנרגיות, אבל זה שווה את זה כדי לדעת שאני יכולה להפוך את החיים של הלקוחות ליותר נוחים ונעימים.'],
		imgUrl: '/AboutMe/aboutMeModal.png'
	}

	let componentClassName = classNames({
		[s.about_me as string]: true,
		[s.ivrit_version as string]: props.langIvrit
	})

	useEffect(() => {
		let body = document.getElementById('body');
		modalIsOpen ? body!.classList.add('fix_scroll') : body!.classList.remove('fix_scroll')
	}, [modalIsOpen])

	return (
		<div className={componentClassName}>
			<div className={s.content}>
				<Image src={image} alt={'About me image'}/>
				<div className={s.text_part}>
					<h2 className={s.title}>{props.langIvrit ? 'לוח זמנים ניקוי נוֹחַ' : 'convenient cleaning schedule'}</h2>
					<button className={s.button} onClick={openModal}>{props.langIvrit ? 'עליי' : 'about me'}</button>
				</div>
			</div>
			<InfoModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} modalTextInfo={props.langIvrit ? modalTextInfoIvrit : modalTextInfo} langIvrit={props.langIvrit}/>
		</div>
	)
}

export default AboutMe;