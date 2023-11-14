import React, { FC, useState } from "react";
import style from "./styles.module.scss";
import { frequency, allergy, cleaning } from "./constants/filterCategories";
import cn from "classnames";

const Filter: FC = () => {
  const [activeFrequencyIndex, setActiveFrequencyIndex] = useState<number | null>(
    null
  );
  const [activeAllergyIndices, setActiveAllergyIndices] = useState<number[]>([]);
  const [activeCleaningIndex, setActiveCleaningIndex] = useState<number | null>(
    null
  );
  const [inputValue, setInputValue] = useState("");

  const handleButtonClickFrequency = (index: number) => {
    setActiveFrequencyIndex(index === activeFrequencyIndex ? null : index);
    setActiveCleaningIndex(null);
  };

  const handleButtonClickAllergy = (index: number) => {
    if (index === 0) {
      setActiveAllergyIndices([index]);
    } else {
      setActiveAllergyIndices((prevIndices) =>
        prevIndices.includes(0) ? [index] : [...prevIndices, index]
      );
    }
  };
  
  

  const handleButtonClickCleaning = (index: number) => {
    if (activeFrequencyIndex === 0) {
      setActiveCleaningIndex(index === activeCleaningIndex ? null : index);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleApplyFilter = () => {
    console.log("Input Value:", inputValue);
    console.log("Frequency Index:", activeFrequencyIndex);
    console.log("Allergy Indices:", activeAllergyIndices);
    console.log("Cleaning Index:", activeCleaningIndex);
  };

  return (
    <div className={style.wrapper}>
      <h2>Use the filter to order cleaning</h2>
      <div className={style.container}>
        <div className={style.containerItems}>
          <div className={style.flex}>
            <FilterCategory
              title="Frequency"
              options={frequency.options}
              activeIndex={activeFrequencyIndex}
              onButtonClick={handleButtonClickFrequency}
            />
            <FilterCategory
              title="Allergy"
              options={allergy.options}
              activeIndices={activeAllergyIndices}
              onButtonClick={handleButtonClickAllergy}
            />
          </div>
          <FilterCategory
            title="Cleaning"
            options={cleaning.options}
            activeIndex={activeCleaningIndex}
            onButtonClick={handleButtonClickCleaning}
            className={style.grid}
          />
        </div>
        <input
          placeholder="address"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div
          className={`${style.btn} ${style.fitContent}`}
          onClick={handleApplyFilter}
        >
          search
        </div>
      </div>
    </div>
  );
};

interface FilterCategoryProps {
  title: string;
  options: string[];
  activeIndex?: number | null;
  activeIndices?: number[];
  onButtonClick: (index: number) => void;
  className?: string;
}

function FilterCategory(props: FilterCategoryProps) {
  const containerClassName = cn(style.category, props.className);

  return (
    <div>
      <h3>{props.title}</h3>
      <div className={containerClassName}>
        {props.options.map((option, index) => (
          <div
            className={cn(
              style.btn,
              (props.activeIndices && props.activeIndices.includes(index)) ||
                props.activeIndex === index
                ? style.activeBtn
                : ""
            )}
            key={index}
            onClick={() => props.onButtonClick(index)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
