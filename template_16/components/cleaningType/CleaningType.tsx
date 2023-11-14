import React from 'react';
import styles from './CleaningType.module.scss';

interface CleaningTypeProps {
    title: string;
    items: string[];
    background: string; 
  }
  
  const CleaningType: React.FC<CleaningTypeProps> = ({ title, items, background }) => {
    const style = {
      backgroundImage: `url(${background})`, 
    };
  
    return (
      <div className={styles.cleaningType} style={style}>
        <div className={styles.cleaningTypeContent}>
          <div>
            <h2>{title}</h2>
          </div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  export default CleaningType;