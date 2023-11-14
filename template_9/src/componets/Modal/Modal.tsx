import React, { ReactNode, useState, useEffect, useRef } from 'react';
import styles from './Modal.module.scss';
type ModalProps = {
   open?: boolean;
   onClose: () => void;
   children?: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
   const [isClosing, setIsClosing] = useState(true);
   const modalRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
         if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            handleClose();

         }
      };

      document.addEventListener('mousedown', handleOutsideClick);

      return () => {
         document.removeEventListener('mousedown', handleOutsideClick);
      };
   }, []);

   const handleClose = () => {
      setIsClosing(false);
      setTimeout(() => {
         onClose();
      }, 300);
   };

   return (
      <div className={`${styles.modal} ${!isClosing ? styles.hidden : ''}`}>
         <div className={styles['modal-container']}>
            <div className={styles['modal-content']} ref={modalRef}>
               <button className={styles['close-button']} onClick={handleClose}>
                  <img src="/Close.svg" alt="close" />
               </button>
               {children}
            </div>
         </div>
      </div>
   );
};

export default Modal;
