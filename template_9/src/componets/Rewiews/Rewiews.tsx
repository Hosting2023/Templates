import React from 'react'
import Slider from '../Sliders/Sliders';
import styles from './Rewiews.module.scss';

const sliders: any = [
   {
      id: 1,
      img: "/face-1.svg",
      name: "Virginia Valdez",
      description: "The order was completed quickly and accurately. Thanks a lot!!!",
      estimation: 4.9

   }
   , {
      id: 2,
      img: "/face-2.svg",
      name: "Brett Ortiz",
      description: "The order was completed quickly and accurately. Thanks a lot!!!",
      estimation: 5

   },
   , {
      id: 3,
      img: "/face-3.svg",
      name: "Evelyn Drake",
      description: "The order was completed quickly and accurately. Thanks a lot!!!",
      estimation: 4.9

   },
   {
      id: 4,
      img: "/face-1.svg",
      name: "Virginia Valdez",
      description: "The order was completed quickly and accurately. Thanks a lot!!!",
      estimation: 4.9

   }
   , {
      id: 5,
      img: "/face-2.svg",
      name: "Brett Ortiz",
      description: "The order was completed quickly and accurately. Thanks a lot!!!",
      estimation: 5

   },
   , {
      id: 6,
      img: "/face-3.svg",
      name: "Evelyn Drake",
      description: "The order was completed quickly and accurately. Thanks a lot!!!",
      estimation: 4.9

   },
]
function Rewiews() {
   return (
      <div className={styles.reviews}>
         <div className={styles.wrapper}>
            <div className={styles.title}>
               Reviews
            </div>
         </div>
         <div className={styles.reviews_slider}>
            <Slider slides={sliders} />
         </div>
         <div className={styles.line}></div>
      </div>
   )
}

export default Rewiews