import { FC, useState } from "react";
import styles from "./Filter.module.scss";
const Filter: FC = () => {
   const [valueVisit, setValueVisit] = useState<any>();
   const [valueAllergy, setValueAllergy] = useState<any>();
   const [valueType, setValueType] = useState<any>();
   return (<div className={styles.filter} id="filter">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={`${styles.filter_title} title`}>
            Filter
         </div>
         <div className={styles.filter_content}>
            <div className={styles.filter_right_types}>
               <div className={styles.filter_right_question}>
                  Allergy
               </div>
               <div className={styles.filter_right_choise}>
                  {Allergys.map((item: any) => (
                     <button key={item.id}
                        onClick={() => setValueAllergy(item.id)}
                        className={`${styles.btn} ${valueAllergy === item.id ? styles.active : ""} btn`}>
                        {item.title}
                     </button>
                  ))}
               </div>
            </div>
            <div className={styles.filter_right_types}>
               <div className={styles.filter_right_question}>
                  Frequency
               </div>
               <div className={styles.filter_right_choise}>
                  {visitfreq.map((item: any) => (
                     <button key={item.id}
                        onClick={() => setValueVisit(item.id)}
                        className={`${styles.btn} ${valueVisit === item.id ? styles.active : ""} btn`}>
                        {item.title}
                     </button>
                  ))}
               </div>
            </div>
            <div className={styles.filter_right_types}>
               <div className={styles.filter_right_question}>
                  Type of cleaning
               </div>
               <div className={styles.filter_right_choise}>
                  {TypeClinings.map((item: any) => (
                     <button key={item.id}
                        onClick={() => setValueType(item.id)}
                        className={`${styles.btn} ${valueType === item.id ? styles.active : ""} btn`}>
                        {item.title}
                     </button>
                  ))}
               </div>
               <div className={`${styles.filter_right_types} ${styles.input}`}>
                  <div className={styles.filter_right_question}>
                     Enter your address
                  </div>
                  <input
                     placeholder="your address"
                  />
               </div>
               <button className={`${styles.btn_search} btn`}>
                  Search
               </button>
            </div>
         </div>
      </div>
   </div>
   )
}

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

const visitfreq = [
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
export default Filter;