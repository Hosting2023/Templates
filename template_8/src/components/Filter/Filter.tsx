import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Filter.module.scss";
// import FilterBlock from './FilterBlock';

interface FilterProps {}

const Filter: FC<FilterProps> = () => {
  const { t } = useTranslation();

  const [activeAllergy, setActiveAllergy] = useState(0);
  const [activeFrequency, setActiveFrequency] = useState(0);
  const [activeCleaning, setActiveCleaning] = useState(0);

  const filters = [
    {
      name: `${t("filter_name1")}`,
      filterItems: [`${t("filter_item1_1")}`, `${t("filter_item1_2")}`, `${t("filter_item1_3")}`],
    },
    {
      name: `${t("filter_name2")}`,
      filterItems: [
        `${t("filter_item2_1")}`,
        `${t("filter_item2_2")}`,
        `${t("filter_item2_3")}`,
        `${t("filter_item2_4")}`,
      ],
    },

    {
      name: `${t("filter_name3")}`,
      filterItems: [
        `${t("filter_item3_1")}`,
        `${t("filter_item3_2")}`,
        `${t("filter_item3_3")}`,
        `${t("filter_item3_4")}`,
      ],
    },
  ];
  return (
    <div className={styles.filter_page} id={t("nav_filter")}>
      <h2 className={styles.filter_header}>{t("filter_title")}</h2>
      {filters && (
        <div className={styles.filter_content}>
          <div className={styles.filter_content_left}>
            <div className={styles.filter_block_wrapper}>
              <span className={styles.filter_block_name}>{filters[0]?.name}</span>
              <div className={styles.filter_block_btn_wrapper}>
                {filters[0]?.filterItems.map((item, idx) => (
                  <button
                    className={
                      activeFrequency === idx
                        ? styles.filter_block_btn_active
                        : styles.filter_block_btn
                    }
                    key={idx}
                    onClick={() => {
                      setActiveFrequency(idx);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.filter_block_wrapper}>
              <span className={styles.filter_block_name}>{filters[1]?.name}</span>
              <div className={styles.filter_block_btn_wrapper}>
                {filters[1]?.filterItems.map((item, idx) => (
                  <button
                    className={
                      activeAllergy === idx
                        ? styles.filter_block_btn_active
                        : styles.filter_block_btn
                    }
                    key={idx}
                    onClick={() => {
                      setActiveAllergy(idx);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {activeFrequency === 0 ? (
              <div className={styles.filter_block_wrapper}>
                <span className={styles.filter_block_name}>{filters[2]?.name}</span>
                <div className={styles.filter_block_btn_wrapper}>
                  {filters[2]?.filterItems.map((item, idx) => (
                    <button
                      className={
                        activeCleaning === idx
                          ? styles.filter_block_btn_active
                          : styles.filter_block_btn
                      }
                      key={idx}
                      onClick={() => {
                        setActiveCleaning(idx);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.filter_content_right}>
            <span className={styles.filter_block_name}>{t("filter_adress")}</span>
            <div className={styles.filter_content_right_input_wrapper}>
              <input type="text" className={styles.filter_content_right_input} />
              <button className={styles.filter_content_right_btn}>{t("filter_btn")}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
