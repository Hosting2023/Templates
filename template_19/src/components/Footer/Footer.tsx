import React from 'react';
import s from './Footer.module.scss';
import {IFooterCard, IvritVersionProps} from "@/types/types";
import classNames from "classnames";
import FooterCard from "@/components/Footer/Footer-card";

import whatsappImg from '@/public/Footer/WHATSAPP.png';
import telegramImg from '@/public/Footer/TELEGRAM.png';
import viberImg from '@/public/Footer/VIBER.png';

const Footer = (props: IvritVersionProps) => {
    let componentClassName = classNames({
        [s.footer as string]: true,
        [s.ivrit_version as string]: props.langIvrit
    })

    const footerCardRender = (cardInfo: IFooterCard[]) => {
        return cardInfo.map((el, id) => <FooterCard image={el.image} btnText={el.btnText} key={id}/>)
    }

    const cardInfo: IFooterCard[] = [
        {
            image: whatsappImg,
            btnText: 'WHATSAPP'
        },
        {
            image: telegramImg,
            btnText: 'TELEGRAM'
        },
        {
            image: viberImg,
            btnText: 'VIBER'
        }
    ]

    const cardInfoIvrit: IFooterCard[] =[
        {
            image: whatsappImg,
            btnText: 'ווטסאפ'
        },
        {
            image: telegramImg,
            btnText: 'מִברָק'
        },
        {
            image: viberImg,
            btnText: 'ויבר'
        }
    ]

    return (
        <footer className={componentClassName}>
            <h2 className={s.title}>{props.langIvrit ? 'צור איתי קשר' : 'contact me'}</h2>
            <div className={s.links}>
                {footerCardRender(props.langIvrit ? cardInfoIvrit : cardInfo)}
            </div>
        </footer>
    );
};

export default Footer;