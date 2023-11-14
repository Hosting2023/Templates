
import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import Image from 'next/image';
import arrow from "@/public/arrow_black.svg";
import arrow_yellow from "@/public/arrow_yellow.svg";
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

                  <div className={`${styles['accordion-icon']} ${isOpen ? styles.open : styles.close}`}>
                     {
                        !isOpen ? <Image
                           src={arrow_yellow}
                           alt="arrow"
                           height={15}
                           className={styles.arrow_yellow}

                        /> : <Image
                           src={arrow}
                           alt="arrow"
                           className={styles.arrow}
                           height={15}
                        />

                     }

                  </div>
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
