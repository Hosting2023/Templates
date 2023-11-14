import React, {FC} from 'react';
import styles from './MainScreen.module.scss';
import Image from "next/image";
import image from '@/public/main_screen.png';

const MainScreen: FC = () => {
    return (
        <div className={styles.main_screen}>
            <div className={styles.content}>
                <div className={'container'}>
                    <div className={styles.text_part}>
                        <h1 className={styles.title}>Free up time for important moments</h1>
                        <p className={styles.text}>I will take care of the cleanliness and comfort of your home while you go about your business.</p>
                        <button className={styles.button}>go to filter</button>
                    </div>
                </div>
                <Image src={image} alt={'Background image'}/>
            </div>
            <div className={styles.line}>
                <div className={styles.vertical_line}></div>
            </div>
        </div>
    );
};

export default MainScreen;