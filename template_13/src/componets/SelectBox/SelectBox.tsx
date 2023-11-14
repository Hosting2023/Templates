import { FC, useEffect, useRef, useState } from "react";
import styles from "./SelectBox.module.scss";
import Image from 'next/image';
import arrow from '@/public/arrow.svg';
interface Item {
   id: number;
   title: string;
}

interface SelectBoxProps {
   title: string;
   items: Item[];
   value?: any;
   GiveValue: any;
}

const SelectBox: React.FC<SelectBoxProps> = ({
   title,
   items,
   value,
   GiveValue,
}) => {
   const [state, setState] = useState<number>(value || 0);
   const [open, setOpen] = useState<boolean>(false);
   const selectBoxRef = useRef<HTMLDivElement | null>(null);

   const handleOpen = () => {
      setOpen(!open);
   };

   const hadleClick = (id: number) => {
      setState(id);
      GiveValue(id);
   };

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (selectBoxRef.current && !selectBoxRef.current.contains(event.target as Node)) {
            setOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <div className={styles.selectbox} ref={selectBoxRef}>
         <div className={styles.selectbox_up} onClick={handleOpen}>
            <div className={styles.selectbox_up_title}>{title}</div>
            <Image
               src={arrow}
               alt="arrow"
               className={
                  `${styles.arrow} ${open ? styles.arrow_active : ""}`
               }
            />
         </div>
         {open && (
            <div className={styles.selectbox_content}>
               {items.map((item) => (
                  <button
                     key={item.id}
                     onClick={() => hadleClick(item.id)}
                     className={`${styles.btn} ${state === item.id ? styles.active : ""} btn`}>
                     {item.title}
                  </button>
               ))}
            </div>
         )}
      </div>
   );
};



export default SelectBox;