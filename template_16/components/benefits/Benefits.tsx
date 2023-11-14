import Card from "../card/Card";
import styles from "./Benefits.module.scss";
import alaram from "@/public/alarm.png";
import bucket from "@/public/bucket.png";
import calendar from "@/public/calendar.png";
import secure from "@/public/secure.png";

export default function Benefits(): JSX.Element {
  return (
    <div className={styles.benefits}>
      <div className={styles.info}>
        <h2>Let me help you keep your home spotless</h2>
        <span>
          Schedule cleaning services at your convenience, whether it`&apos;`s a one-time deep clean
          or regular weekly visits.
        </span>
      </div>
      <div className={styles.cards}>
        <Card
          src={calendar.src}
          title="Customizable services"
          description="Customizable cleaning services to meet your specific preferences"
          alt={"calendar icon"}
        />
        <Card
          src={alaram.src}
          title="Time-saving solution"
          description="Save you time and effort by taking care of the cleaning for you"
          alt={"alaram icon"}
        />
        <Card
          src={bucket.src}
          title="Thorough cleaning"
          description="Provide thorough cleaning services"
          alt={"bucket icon"}
        />
        <Card
          src={secure.src}
          title="Consistent results"
          description="Striving for consistent purity level results"
          alt={"secure icon"}
        />
      </div>
    </div>
  );
}
