import React from 'react';
import styles from "./Reviews.module.scss";
import stars from '@/public/stars.png'

interface CardProps {
    src: string;
    text: string;
}

const RevCard: React.FC<CardProps> = ({ text, src }) => {
    return (
        <div className={styles.revCard}>
            <div className={styles.cardHeader}>
                <span>{text}</span>
            </div>
            <div className={styles.CardFooter}>
                <img src={src} alt="avatar" />
                <div className={styles.cardName}>
                    <span>name last name</span>
                    <span className={styles.lowerName}>name last name</span>
                </div>
                <div className={styles.cardStars}>
                <img className={styles.starsImg} src={stars.src} alt="stars" />
                </div>
            </div>
        </div>
    );
};

export default RevCard;