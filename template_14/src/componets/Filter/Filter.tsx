import { FC, useState } from "react";
import styles from "./Filter.module.scss";
import Image from 'next/image';
import SliderSwipper from "../SliderSwipper/SliderSwipper";
import filter_1 from '@/public/filter-1.svg';
import filter_2 from '@/public/filter-2.svg';
import filter_3 from '@/public/filter-3.svg';
import filter_4 from '@/public/filter-4.svg';
import Slider from "../Slider/Slider";
import FilterOption from "../FilterOption/FilterOption";
const Filter = ({ GiveValueType }: any) => {
   const [valueVisit, setValueVisit] = useState<any>();
   const [valueAllergy, setValueAllergy] = useState<any>();
   const [valueType, setValueType] = useState<any>();
   const handleAllergyChange = (selectedAllergy: any) => {
      setValueAllergy(selectedAllergy);

   };
   const handleVisitChange = (selectedVisit: any) => {
      setValueVisit(selectedVisit);

   };

   const handleTypeChange = (selectedType: any) => {
      setValueType(selectedType);
      GiveValueType(selectedType);
   };
   return (<div className={styles.filter} id="filter">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={styles.filter_content}>
            <div className={styles.filter_title_block}>
               <div className={styles.filter_block_square}>
               </div>
               <div className={`${styles.filter_title} title`}>
                  Filter
               </div>
            </div>
            <div className={styles.filter_text}>
               You need to choose your preferred options for selecting a maid:
            </div>

            <div className={styles.filter_content_blocks}>
               {valueVisit == null || valueAllergy != null && valueType != null || valueAllergy == null ? (
                  <FilterOption
                     value={valueVisit}
                     options={visitfreq}
                     handleChange={handleVisitChange}
                     title="Frequency"
                  />
               ) : null}

               {((valueAllergy == null && valueVisit != null) || (valueAllergy != null && valueType != null)) ? (
                  <FilterOption
                     value={valueAllergy}
                     options={Allergys}
                     handleChange={handleAllergyChange}
                     title="Allergy"
                  />
               ) : null}

               {(valueAllergy != null && valueAllergy != null || valueType != null) ? (
                  <FilterOption
                     value={valueType}
                     options={TypeClinings}
                     handleChange={handleTypeChange}
                     title="Type of cleaning"
                  />
               ) : null}

               {
                  valueAllergy != null && valueAllergy != null && valueType == null && (
                     <div className={styles.filter_content_slider}>
                        <SliderSwipper slides={TypeClinings}
                           renderSlide={(slide: any) => {
                              return (
                                 <div className={styles.slider_block}>
                                    <div className={styles.slide_img}>
                                       <Image
                                          src={slide.img}
                                          layout="responsive"

                                          alt={slide.img}

                                       />
                                    </div>
                                    <div className={styles.slide_text}>
                                       {slide.title}
                                    </div>
                                    <div className={styles.slide_btn} onClick={() => handleTypeChange(slide.id)} >
                                       Choose
                                    </div>
                                 </div>
                              )
                           }
                           } />
                     </div>)
               }

            </div>


         </div>
      </div>
   </div>
   )
}

const Allergys: any = [
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

const visitfreq: any = [
   {
      id: 1,
      title: "One-time"
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

const TypeClinings: any = [
   {
      id: 1,
      title: "Regular cleaning",
      img: filter_1,
   },
   {
      id: 2,
      title: "Window cleaning",
      img: filter_2,

   },
   {
      id: 3,
      title: "After repairing",
      img: filter_3,
   },
   {
      id: 4,
      title: "After relocation",
      img: filter_4,

   },
]
export default Filter;