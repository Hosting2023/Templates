import React from 'react';
import Accordion from '../Accordion/Accordion';
import styles from './Services.module.scss';
interface Service {
   id: number;
   title: string;
   description: string;
}

const services: Service[] = [
   {
      id: 1,
      title: "Room cleaning",
      description: `Dusting
                   Vacuuming
                   Making the bed
                   Organizing items
                   Wiping down surfaces
                   Cleaning the bathroom`,
   },
   {
      id: 2,
      title: "Kitchen cleaning",
      description: `Washing dishes
                   Wiping down countertops and cabinets
                   Cleaning the sink and faucet
                   Sweeping and mopping the floor
                   Cleaning the stove and oven
                   Taking out the trash`,
   },
   {
      id: 3,
      title: "Cleaning the bathroom",
      description: `Cleaning the toilet, shower/tub, sink and countertops
                   Wiping down mirrors
                   Mopping the floor
                   Restocking supplies
                   Cleaning the floor`,
   },
   {
      id: 4,
      title: "Hallway cleaning",
      description: `Wiping down surfaces sweeping or vacuuming the floor
                   Organizing shoes and outerwear
                   Cleaning any mirrors or windows
                   Dusting any decorations or picture frames`,
   },
];

const Services: React.FC = () => {
   return (
      <div className={styles.services}>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.title}>Services</div>
            <div className={styles.services_content}>
               <div className={styles.services_blocks}>
                  {services.map((item) => (
                     <div className={styles.service_block} key={item.id}>
                        <Accordion title={item.title} description={item.description} plus={false} />
                     </div>
                  ))}
               </div>
               <div className={styles.imgs}>
                  <div className={styles.img}>
                     <img src="/room.svg" alt="" />
                  </div>
                  <div className={styles.img}>
                     <img src="/kitchen.svg" alt="" />
                  </div>
                  <div className={styles.img}>
                     <img src="/bathroom.svg" alt="" />
                  </div>
                  <div className={styles.img}>
                     <img src="/Hallway.svg" alt="" />
                  </div>
                  <div className={styles.img}>
                     <img src="/room.svg" alt="" />
                  </div>
                  <div className={styles.img}>
                     <img src="/kitchen.svg" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Services;
