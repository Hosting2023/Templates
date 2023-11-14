import styles from './Button.module.scss'

export default function Button({text}: {text: string}): JSX.Element {
    return (
    <button className={styles.button}>{text}</button>
    );
  }
  