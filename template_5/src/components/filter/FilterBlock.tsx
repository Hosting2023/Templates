import { FC, useState } from "react";

import styles from "./Filter.module.scss";
import FilterButton from "./FilterButton";

interface FilterBlockProps {
  name: string;
  filterItems: string[];
}

const FilterBlock: FC<FilterBlockProps> = ({ name, filterItems }) => {
  const [activeFilter, setActiveFilter] = useState<string>(filterItems[0] || "");

  return (
    <div className={styles.filter_block_wrapper}>
      <span className={styles.filter_heading}>{name}</span>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {filterItems.map((item, index) => (
          <FilterButton
            item={item}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBlock;
