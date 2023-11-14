import React from 'react';
import styles from "./Reviews.module.scss";
import RevCard from './RevCard';
import avatar1 from '@/public/avatar1.png'
import avatar2 from '@/public/avatar2.png'
import avatar3 from '@/public/avatar3.png'
import avatar4 from '@/public/avatar4.png'
import avatar5 from '@/public/avatar5.png'

const Reviews: React.FC = () => {
    return (
        <div className={styles.reviews}>
            <div className={styles.reviewsHeader}>
                <h2>Reviews</h2>
            </div>
            <div className={styles.reviewsCards}>
                <RevCard 
                text="I recently used for a deep cleaning of my home and I couldn't be happier with the results. The maid was professional, efficient, and thorough in her work." 
                src={avatar1.src} />
                <RevCard 
                text="The customer service was excellent - she was quick to respond to my questions and flexible in accommodating my schedule. She paid attention to all the details and left my home spotless." 
                src={avatar2.src} />
                <RevCard 
                text="I've been using maid services for a few months now and I have to say, I'm thoroughly impressed. The booking process is simple and hassle-free, and the customer service is top-notch. " 
                src={avatar3.src} />                
            </div>
            <div className={styles.reviewsCards}>
                <RevCard 
                text="I recently used for a deep cleaning of my home and I couldn't be happier with the results. The maid was professional, efficient, and thorough in her work." 
                src={avatar1.src} />
                <RevCard 
                text="I've been using maid services for a few months now and I have to say, I'm thoroughly impressed. The booking process is simple and hassle-free, and the customer service is top-notch. " 
                src={avatar4.src} />
                <RevCard 
                text="I recently used for a deep cleaning of my home and I couldn't be happier with the results. The maid was professional, efficient, and thorough in her work." 
                src={avatar5.src} />                
            </div>
        </div>
    );
};

export default Reviews;