import { FC } from "react";

import styles from "./Authentification.module.scss";

interface ButtonProps {
  children: string;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
