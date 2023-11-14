import { FC, useState } from "react";
import styles from "./Filter.module.scss";
import Image from 'next/image';
import filter_1 from "@/public/filter_1.svg";
import filter_2 from "@/public/filter_2.svg";
import filter_3 from "@/public/filter_3.svg";
import pencil from "@/public/pencil.svg"
const arrs = [
   {
      title: "Frequency",
      choises: [
         {
            id: 1,
            title: "Regular cleaning",
            description:
               "I will regularly come and do comprehensive cleaning, including vacuuming, dusting, cleaning work and surface care. This will help you keep your space fresh and comfortable throughout the week.",
            img: filter_1,
         },
         {
            id: 2,
            title: "Window cleaning",
            description:
               "I will professionally and carefully wash windows, wipe off dust, stains and dirt, so that you can enjoy the cleanliness and beautiful views from the windows.",
            img: filter_2,
         },
         {
            id: 3,
            title: "After repairing",
            description:
               "I will restore your space to its ideal condition by removing building dust, sanding surfaces, mopping floors and removing any leftover materials or debris.",
            img: filter_3,
         },
         {
            id: 4,
            title: "After relocation",
            description:
               "I will restore your space to its ideal condition by removing building dust, sanding surfaces, mopping floors and removing any leftover materials or debris.",
            img: filter_3,
         },
      ],
   },
   {
      title: "cleaning",
      question: "Do you have allergies?",
      choises: [
         {

            id: 1,
            title: "One-time",
            description: "Includes vacuuming, dusting, washing and surface care. Cleaning a one-time order is a great way to freshen up your space."
         },
         {
            id: 2,
            title: "Twice a week",
            description: "I will regularly come on days convenient for you and carry out a complete cleaning of the premises. This will help you keep clean and tidy throughout the week."
         },
         {
            id: 3,
            title: "Every week",
            description: "As part of my weekly cleaning routine, I vacuum and mop the floors, and dust off all accessible surfaces, including furniture, tables, shelves, and other items."
         },
      ],
   },
   {
      title: "allergy",

      choises: [

         {

            id: 1,
            title: "None",
         },
         {
            id: 2,
            title: "Cat",
         },
         {
            id: 3,
            title: "Dog",
         },
      ],
   },
];
const Filter: FC = () => {
   const [valueVisit, setValueVisit] = useState<any>();
   const [valueAllergy, setValueAllergy] = useState<any>();
   const [valueType, setValueType] = useState<any>();
   const [tab, setTab] = useState<number>(0);

   const handleChoiceClick = (itemTitle: string) => {
      if (tab === 0) {
         setValueType(itemTitle);
      } else if (tab === 1) {
         setValueVisit(itemTitle);
      } else if (tab === 2) {
         setValueAllergy(itemTitle);
      }


   };
   const handleClickWithDelay = (title: string) => {
      handleChoiceClick(title);
      setTimeout(() => {
         setTab(tab => tab + 1);
      }, 100);
   };

   const renderChoiceItem = (item: any, index: number) => {
      return (
         <div
            className={`${styles.choise} ${index === tab ? styles.active : ''}`}
            key={index}
            onClick={() => setTab(index)}
         >
            {item.title}
         </div>
      );
   };

   const renderContentItem = (item: any, index: number) => {
      const isActiveType = tab === 0 && valueType === item.title;
      const isActiveVisit = tab === 1 && valueVisit === item.title;
      const isActiveAllergy = tab === 2 && valueAllergy === item.title;

      return (
         <div className={styles.content_item} key={index}>
            {item.img && (
               <div className={styles.item_img}>
                  <Image src={item.img} alt="img" width={200} height={200} />
               </div>
            )}
            {item.description ? (
               <>
                  <div className={`${styles.item_title} title`}>{item.title}</div>
                  <div className={styles.item_description}>{item.description}</div>
                  {tab == 0 && (<div
                     className={`${styles.btn} btn ${isActiveType ? styles.active : ''
                        }`}
                     onClick={() => handleClickWithDelay(item.title)}
                  >
                     Choice
                  </div>)}
                  {tab == 1 && (<div
                     className={`${styles.btn} btn ${isActiveVisit ? styles.active : ''
                        }`}
                     onClick={() => handleClickWithDelay(item.title)}
                  >
                     Choice
                  </div>)}
               </>
            ) : (
               <div
                  className={`${styles.btn_left} btn ${isActiveAllergy ? styles.active : ''
                     }`}
                  onClick={() => handleClickWithDelay(item.title)}
               >
                  {item.title}
               </div>
            )}

         </div>
      );
   };


   return (
      <div className={styles.filter} id="filter">
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.filter_content}>
               <div className={styles.filter_content_up}>
                  <div className={`${styles.filter_title} title`}>Filter</div>
                  <div className={styles.filter_text}>
                     Use the convenient filter to select the ideal and suitable service for you
                  </div>
               </div>
               <div className={styles.filter_content_down}>
                  <div className={styles.down_choise}>
                     {arrs.map(renderChoiceItem)}
                     <div className={`${styles.choise} ${3 === tab ? styles.active : ''}`} onClick={() => setTab(3)}>
                        address
                     </div>
                  </div>
                  <div className={`${styles.down_content} ${tab === 2 && styles.question}`}>
                     {tab === 2 && <p className={styles.hide}> Do you have allergies?</p>}
                     {tab < arrs.length && arrs[tab].choises.map(renderContentItem)}
                     {tab === 3 && (
                        <div className={styles.content_item}>
                           <div className={styles.item_question}>Enter your address and hit search</div>
                           <div className={styles.item_input}>
                              <Image src={pencil} alt={pencil} width={30} height={30} />
                              <input type="text" placeholder="Enter your address" />
                           </div>
                           <div className={`${styles.btn_top} btn`}>search</div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};


export default Filter;