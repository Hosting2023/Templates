import React from 'react';
import s from './Auth.module.scss'
import Image from "next/image";
import Facebook from '@/public/Auth/Facebook.svg';
import Google from '@/public/Auth/Google.svg';

const Auth = () => {
    return (
        <div className={s.auth}>
            <div className={s.content}>
                <button className={s.button_close}>close</button>
                <div className={s.top_side}>
                    <h2 className={s.title}>To order please login or register</h2>
                    <div className={s.buttons}>
                        <button className={s.button}>sing up</button>
                        <button className={s.button}>log in</button>
                    </div>
                </div>
                <div className={s.links}>
                    <a href="#"><Image src={Facebook} alt={'Facebook'}/></a>
                    <a href="#"><Image src={Google} alt={'Google'}/></a>
                </div>
            </div>
        </div>
    );
};

export default Auth;