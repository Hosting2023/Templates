import React from 'react';
import styles from './Apartment.module.scss'
interface BlockProps {
   title: string;
   text: string;
}

function Block({ title, text }: BlockProps) {
   return (
      <div className={styles.block_more}>
         <div className={styles.block_more_title}>{title}</div>
         <div className={styles.block_more_text}>{text}</div>
      </div>
   );
}

function Apartment() {
   const blocks: BlockProps[] = [
      {
         title: 'Room cleaning',
         text: 'Dusting\nVacuuming\nMaking the bed\nOrganizing items\nWiping down surfaces\nCleaning the bathroom',
      },
      {
         title: 'Kitchen cleaning',
         text: 'Washing dishes\nWiping down countertops and cabinets\nCleaning the sink and faucet\nSweeping and mopping the floor\nCleaning the stove and oven\nTaking out the trash',
      },
      {
         title: 'Cleaning the bathroom',
         text: 'Cleaning the toilet, shower/tub, sink and countertops\nWiping down mirrors\nMopping the floor\nRestocking supplies\nCleaning the floor',
      },
      {
         title: 'Hallway cleaning',
         text: 'Wiping down surfaces sweeping or vacuuming the floor\nOrganizing shoes and outerwear\nCleaning any mirrors or windows\nDusting any decorations or picture frames',
      },
   ];

   return (
      <div className={styles.apartament}>
         <h1 className={styles.title}>
            Our company will help you select and order a maid to clean your apartment or cottage.
         </h1>
         <div className={styles.apartament_content}>
            <div className={styles.block}>
               <img src="/room.svg" alt="" />
               <div className={styles.block_text}>Room cleaning</div>
            </div>
            <div className={styles.block}>
               <img src="/kitchen.svg" alt="" />
               <div className={styles.block_text}>Kitchen cleaning</div>
            </div>
            <div className={styles.block}>
               <img src="/bathroom.svg" alt="" />
               <div className={styles.block_text}>Cleaning the bathroom</div>
            </div>
            <div className={styles.block}>
               <img src="/Hallway.svg" alt="" />
               <div className={styles.block_text}>Hallway cleaning</div>
            </div>
         </div>
         <div className={`${styles.wrapper} wrapper`}>
            <div className={styles.apartament_content_more}>
               {blocks.map((block, index) => (
                  <Block key={index} title={block.title} text={block.text} />
               ))}
            </div>
         </div>
      </div>
   );
}

export default Apartment;
