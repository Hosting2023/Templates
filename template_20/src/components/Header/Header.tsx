import React, {FC} from 'react';
import styles from './Header.module.scss'
import Image, {StaticImageData} from "next/image";

import viberImg from '@/public/header_viber.svg'
import telegramImg from '@/public/header_telegram.svg'
import whatsappImg from '@/public/hedaer_whatsapp.svg'

const Header: FC = () => {
    interface ILinksData {
        url: string,
        image: StaticImageData,
        alt: string
    }

    const renderLinks = (linksData: ILinksData[]) => {
        return linksData.map(el => <li className={styles.item}><a href={el.url}><Image src={el.image} alt={el.alt}/></a></li>)
    }

    const linksData = [
        {
            url: '#',
            image: telegramImg,
            alt: 'Telegram Icon'
        },
        {
            url: '#',
            image: whatsappImg,
            alt: 'Whatsapp Icon'
        },
        {
            url: '#',
            image: viberImg,
            alt: 'Viber Icon'
        },


    ]

    return (
        <div className={styles.header}>
            <ul className={styles.list}>
                {renderLinks(linksData)}
            </ul>
        </div>
    );
};

export default Header;