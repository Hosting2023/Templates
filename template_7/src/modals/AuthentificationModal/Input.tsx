import { FC, HTMLInputTypeAttribute, useRef } from "react";

import styles from "./Authentification.module.scss";

interface InputProps {
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
}

const Input: FC<InputProps> = ({ inputType, placeholder }) => {
  const ref = useRef<HTMLInputElement>(null);

  return placeholder === "Date Of Birth" ? (
    <input
      className={styles.ipt}
      type={inputType}
      placeholder={placeholder}
      ref={ref}
      onFocus={() => (ref.current ? (ref.current.type = "date") : null)}
      onBlur={() => (ref.current ? (ref.current.type = "text") : null)}
    ></input>
  ) : (
    <input className={styles.ipt} type={inputType} placeholder={placeholder}></input>
  );
};

export default Input;
