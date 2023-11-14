import { FC, useState } from "react";
import styles from "./Filter.module.scss";
import Image from "next/image";
import clean from "@/public/clean-1.svg";
import clean_2 from "@/public/clean-2.svg";
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
const Filter: FC = () => {
   const [valueVisit, setValueVisit] = useState<any>();
   const [valueAllergy, setValueAllergy] = useState<any>();
   const [valueType, setValueType] = useState<any>();
   return (
      <div className={styles.filter} id="filter">
         <div className={`${styles.wrapper} wrapper`}>
            <div className={`${styles.filter_title} title`}>
               Filter
            </div>
            <div className={styles.filter_content}>
               <div className={styles.filter_content_left}>
                  <div className={styles.filter_content_img_first}>
                     <Image
                        src={clean}
                        alt="girl"
                        className={styles.img}
                     />
                  </div>
                  <div className={styles.filter_content_img_second}>
                     <Image
                        src={clean_2}
                        alt="girl"
                        className={styles.img}
                     />
                  </div>
               </div>
               <div className={styles.filter_content_right}>

                  <div className={styles.filter_right_types}>
                     <div className={styles.filter_right_question}>
                        Do you have allergy?
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
                        How often do you need cleaning?
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
                        What kind of cleaning do you need?
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
                     <div className={styles.filter_right_input_and_button}>
                        <input
                           placeholder="your address"

                        />   <button className={`${styles.btn} btn`}>
                           Search
                        </button>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>

   )
}

export default Filter;