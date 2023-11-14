
import React, { useState } from 'react';
import styles from './Accordion.module.scss';

type AccordionProps = {
   title: string;
   description: string;
   plus?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ title, description, plus = true }) => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const toggleAccordion = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
   };

   return (
      <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
         <div className={styles['accordion-header']} onClick={toggleAccordion}>
            {plus ? (
               <>
                  <div className={styles['accordion-title']}>{title}</div>
                  <div className={`${styles['accordion-icon']} ${isOpen ? styles.open : ''}`}>{isOpen ? '-' : '+'}</div>
               </>
            ) : (
               <div className={styles['accordion-title-centered']}>{title}</div>
            )}
         </div>
         {isOpen && <div className={styles['accordion-content']}>{description}</div>}
      </div>
   );
};

export default Accordion;
