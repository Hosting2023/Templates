import { FC, useState } from "react";
import styles from "./Services.module.scss";

const Services: FC = () => {
   return (<div className={styles.services} id="services">
      <div className={`${styles.wrapper} wrapper`}>
         <div className={`${styles.about_content_title} title `}>
            services
         </div>
         <div className={styles.main_content}>
            {arr_types.map((item) => <BlockMore item={item} key={item.id} />)
            }
         </div>
      </div>
   </div>
   )
}


export default Services;



const arr_types = [
   {
      id: 1,
      title: "Regular cleaning",
      descrition: "My window cleaning services will bring shine and brightness to your home using professional products and techniques.",
      more_info: [
         "Vacuuming and dusting in all rooms;",
         "Floor cleaning including washing and polishing;",
         "Cleaning bathrooms including toilets, sinks and showers;",
         "Washing and drying dishes (on request);",
         "Garbage removal and recycling;",
         "Maintain order in the kitchen, including tables, surfaces and appliances."
      ]
   },
   {
      id: 2,
      title: "Window cleaning",
      descrition: "My window cleaning services will bring shine and brightness to your home using professional products and techniques.",
      more_info: [
         "Glass cleaning from dust, dirt and stains;",
         "Washing window frames and window sills;",
         "Removing marks on glasses, including fingerprints and plaque.",

      ]
   },
   {
      id: 3,
      title: "After repairing",
      descrition: "After the repair, my services will help return your home to its original state after the construction work is completed.",
      more_info: [
         "Removal of construction dust and dirt;",
         "Floor cleaning including washing and polishing;",
         "Cleaning bathrooms including toilets, sinks and showers;",
         "Washing and drying dishes (on request);",

      ]
   },
   {
      id: 4,
      title: "After relocation",
      descrition: "After moving, I will help you to easily relieve the stress associated with the move. I will clean your new home before you move in.",
      more_info: [
         "Vacuuming and dusting in all rooms;",
         "Floor cleaning including washing and polishing;",
         "Cleaning bathrooms including toilets, sinks and showers;",
         "Washing and drying dishes (on request);",
         "Garbage removal and recycling;",
         "Maintain order in the kitchen, including tables, surfaces and appliances."
      ]
   }
]



const BlockMore = ({ item }: any) => {
   const [state, setState] = useState<boolean>(false)
   return <div className={styles.block}>
      <div className={styles.block_title}>
         {item.title}
      </div>
      <div className={styles.block_description}>
         {item.descrition}
      </div>
      {
         !state ? (<button
            onClick={() => setState(true)}
            className={`${styles.btn} btn`}
         >More</button>) : (
            <div className={styles.block_more}>
               <ul>
                  {
                     item.more_info.map((item: any, index: number) => {
                        return <li key={index}>{item}</li>
                     })
                  }
               </ul>
            </div>)
      }
   </div>

}