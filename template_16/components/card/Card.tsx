import styles from "./Card.module.scss";

interface CardProps {
  src: string;
  title: string;
  description: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ alt, src, title, description }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={src} alt={alt} />
        <h2>{title}</h2>
      </div>
      <span>{description}</span>
    </div>
  );
};

export default Card;
