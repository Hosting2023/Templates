import React, { useState } from 'react';
import styles from './Filter.module.scss';

const slider = [
   {
      img: '/girl-2.svg',
      name: 'Jane Williams',
      years: '32 years',
      estimate: 5,
   },
   {
      img: '/girl-2.svg',
      name: 'Dasha',
      years: '19 years',
      estimate: 5,
   },
   {
      img: '/girl-2.svg',
      name: 'Irina',
      years: '22 years',
      estimate: 4.4,
   },
];

const visitfreq = [
   {
      id: 1,
      title: "One-time cleaning"
   },
   {
      id: 2,
      title: "Twice a week"
   },
   {
      id: 3,
      title: "Every week"
   },
]

const Allergys = [
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
   }
]
const TypeClinings = [
   {
      id: 1,
      title: "Regular cleaning",
   },
   {
      id: 2,
      title: "Window cleaning",
   },
   {
      id: 3,
      title: "After repairing",
   },
   {
      id: 4,
      title: "After relocation",
   },
]
interface Slide {
   img: string;
   name: string;
   years: string;
   estimate: number;
}

function Filter() {
   const [indexSlide, setIndexSlide] = useState<number>(0);
   const [valueVisit, setValueVisit] = useState<any>();
   const [valueAllergy, setValueAllergy] = useState<any>();
   const [valueType, setValueType] = useState<any>();

   const slides = slider;


   const handlePrevSlide = () => {
      setIndexSlide((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
   };

   const handleNextSlide = () => {
      setIndexSlide((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
   };

   return (
      <div className={styles.filter}>
         <div className={`${styles.wrapper} wrapper`}>
            <h1 className={styles.title}>Filter</h1>
            <div className={styles.filter_content}>
               {slides.map((slide: Slide, index: number) => {
                  const { img, name, years, estimate } = slide;
                  const cardClass = index === indexSlide ? `${styles.card} ${styles.active}` : styles.card;

                  return (
                     <div className={cardClass} key={index}>
                        <div className={styles.main_card}>
                           <div className={`${styles.arrow} ${styles.left}`} onClick={handlePrevSlide}>
                              {"<"}
                           </div>
                           <div className={`${styles.arrow} ${styles.right}`} onClick={handleNextSlide}>
                              {">"}
                           </div>
                           <img src={img} alt="" />
                           <div className={styles.main_card_info}>
                              <div className={`${styles.text} ${styles.nameYears}`}>
                                 <div className={styles.name}>{name}</div>
                                 <div className={styles.years}>{years}</div>
                              </div>
                              <div className={styles.star}>
                                 <img src="/star-2.svg" alt="" />
                                 <div className={styles.value}>{estimate}</div>
                              </div>
                           </div>
                        </div>
                        <div className={`${styles.two_card} ${styles.extraCard}`}></div>
                        <div className={`${styles.three_card} ${styles.extraCard}`}></div>
                     </div>
                  );
               })}
               <div className={`${styles.filter_menu} ${styles.menu}`}>
                  <div className={`${styles.main_filter} main_filter`}>
                     <div className={`${styles.block_filter} ${styles.filterBlock}`}>
                        <h1 className={`${styles.block_filter_title} ${styles.filterTitle}`}>Visit frequency</h1>
                        <ul>
                           {visitfreq.map((item: any) => (
                              <li key={item.id} onClick={() => setValueVisit(item.id)} className={valueVisit === item.id ? styles.active : ""}>
                                 {item.title}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className={`${styles.block_filter} ${styles.filterBlock}`}>
                        <h1 className={`${styles.block_filter_title} ${styles.filterTitle}`}>Allergy</h1>
                        <ul>
                           {Allergys.map((item: any) => (
                              <li key={item.id} onClick={() => setValueAllergy(item.id)} className={valueAllergy === item.id ? styles.active : ""}>
                                 {item.title}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className={`${styles.block_filter} ${styles.filterBlock}`}>
                        <h1 className={`${styles.block_filter_title} ${styles.filterTitle}`}>Type of cleaning</h1>
                        <ul>
                           {TypeClinings.map((item) => (
                              <li key={item.id} onClick={() => setValueType(item.id)} className={valueType === item.id ? styles.active : ""}>
                                 {item.title}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className={styles.address}>
                     <div className={styles.address_name}>Address</div>
                     <div className={styles.address_input}>
                        <input type="text" placeholder="Street" />
                     </div>
                  </div>
               </div>
            </div>
            <button className={styles.btn}>Search</button>
         </div>
         <div className={styles.line}></div>
      </div>

   );
}

export default Filter;
