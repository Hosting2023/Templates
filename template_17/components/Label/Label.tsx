import { TranslateType } from "@/types";
import React from "react";

import styles from "./Label.module.scss";

const Label = ({ item }: TranslateType) => {
    return <p className={styles.label}>{item}</p>;
};

export default Label;
