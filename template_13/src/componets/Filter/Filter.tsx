import { FC, useEffect, useRef, useState } from "react";
import styles from "./Filter.module.scss";
import Image from 'next/image';
import SelectBox from "../SelectBox/SelectBox";
import { filterChoices, Allergys, visitfreq, TypeClinings } from "@/assets/main";

const Filter: FC = () => {
   const [valueVisit, setValueVisit] = useState<any>();
   const [valueAllergy, setValueAllergy] = useState<any>();
   const [valueType, setValueType] = useState<any>();

   return (<div className={styles.filter} id="filter">
      <div className={`${styles.wrapper} wrapper`}>

         <div className={styles.filter_content}>
            <div className={styles.filter_content_up}>
               <div className={`${styles.filter_title} title`}>
                  How to use the filter
               </div>
               <div className={styles.filter_content_choise}>
                  {filterChoices.map((choice, index) => {
                     const { text } = choice;
                     return (
                        <div className={styles.choise} key={index}>
                           <input type="checkbox" className={styles.customCheckbox} />
                           <div className={styles.choise_text}>
                              {text}
                           </div>
                        </div>
                     )
                  }
                  )}
               </div>
            </div>
            <div className={styles.filter_content_down}>
               <div className={styles.filter_content_blocks}>
                  <div className={styles.filter_block}>
                     <SelectBox title="Allergies" items={Allergys} value={valueAllergy} GiveValue={(id: any) => { setValueAllergy(id) }} />
                  </div>
                  <div className={styles.filter_block}>
                     <SelectBox title="Frequency" items={visitfreq} value={valueVisit} GiveValue={(id: any) => { setValueVisit(id) }} />
                  </div>
                  <div className={styles.filter_block}>
                     <SelectBox title="Cleaning" items={TypeClinings} value={valueType} GiveValue={(id: any) => { setValueType(id) }} />
                  </div>
               </div>
               <div className={styles.filter_block_input}>
                  <div className={styles.filter_input}>   <input placeholder="Address" />
                     <div className={styles.line}>
                     </div>
                  </div>
                  <button className={`${styles.btn} btn`}>Search</button>
               </div>
            </div>
         </div>
      </div>
   </div >
   )
}


export default Filter;