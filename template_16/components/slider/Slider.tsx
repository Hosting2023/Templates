"use client";
import React, { useState } from "react";
import styles from "./Slider.module.scss";
import CleaningType from "../cleaningType/CleaningType";
import roomBg from '@/public/roomBg.png'
import bathroomBg from '@/public/bathroomBg.png'
import hallwayBg from '@/public/hallwayBg.png'
import kitchenBg from '@/public/kitchenBg.png'

const Slider: React.FC = () => {
  const [activeTab, setActiveTab] = useState("room");

  const cleaningTypes = [
    {
      type: 'room',
      title: 'In room',
      items: [
        'We fold clothes and arrange things',
        'Making the bed or changing bed linen',
        'We wipe all accessible surfaces, switches, doors and door handles',
        'We wipe household appliances',
        'Cleaning mirrors and glass surfaces',
        'We vacuum carpets, wash the floor and wipe baseboards',
      ],
      background: roomBg.src,
    },
    {
      type: 'kitchen',
      title: 'In the kitchen',
      items: [
        'We wash the dishes, clean the sink and plumbing',
        'We wipe all accessible surfaces, switches, doors and door handles',
        'We wash the outside of the stove, countertop, kitchen apron and refrigerator',
        'We wipe household appliances',
        'Wipe down kitchen cabinet fronts',
        'We vacuum and wash the floor, wipe the baseboards',
        'Taking out the trash',
      ],
      background: kitchenBg.src,
    },
    {
      type: 'bathroom',
      title: 'In the bathroom',
      items: [
        'We wipe all accessible surfaces, switches, doors and door handles',
        'We wash plumbing, shower and bathroom',
        'Cleaning mirrors and glass surfaces',
        'Cleaning the sink and disinfecting the toilet',
        'We vacuum the rugs, wash the floor and wipe the baseboards',
        'Taking out the trash',
      ],
      background: bathroomBg.src,
    },
    {
      type: 'hallway',
      title: 'In hallway',
      items: [
        'We wipe all accessible surfaces, switches, doors and door handles',
        'Cleaning mirrors and glass surfaces',
        'We vacuum carpets, wash the floor and wipe baseboards',
        'Fixing shoes',
      ],
      background: hallwayBg.src,
    },
  ];

  const renderContent = () => {
    const selectedType = cleaningTypes.find(type => type.type === activeTab);
    if (selectedType) {
      return <CleaningType title={selectedType.title} items={selectedType.items} background={selectedType.background}/>;
    }
    return null;
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderHeader}>
        <h2>Types of cleaning</h2>
      </div>
      <div className={styles.sliderBtn}>
        <button
          className={activeTab === "room" ? styles.activeButton : ""}
          onClick={() => setActiveTab("room")}
        >
          Room
        </button>
        <button
          className={activeTab === "kitchen" ? styles.activeButton : ""}
          onClick={() => setActiveTab("kitchen")}
        >
          Kitchen
        </button>
        <button
          className={activeTab === "bathroom" ? styles.activeButton : ""}
          onClick={() => setActiveTab("bathroom")}
        >
          Bathroom
        </button>
        <button
          className={activeTab === "hallway" ? styles.activeButton : ""}
          onClick={() => setActiveTab("hallway")}
        >
          Hallway
        </button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Slider;
