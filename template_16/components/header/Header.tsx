import Button from "../button/Button";
import styles from './Header.module.scss'

export default function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
      <h1>
        Looking for a reliable and efficient maid service?
      </h1>
      <span className="header__description">
        I will work closely with you to provide a customized cleaning
        experience, leaving your home sparkling clean every time.
      </span>
      <Button text="GO TO FILTER" />
      </div>
    </div>
  );
}
