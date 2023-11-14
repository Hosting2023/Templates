import style from "./styles.module.scss";
import { services } from "./constants/services";
import Image from "next/image";

function DetailedInfo() {
  return (
    <div className={style.wrapper}>
      <h2>Detailed information about cleaning frequency</h2>

      <div className={style.itemWrap}>
        {services.map((service, index) => (
          <div className={style.item} key={index}>
            <Image className={style.image} src={service.icon as unknown as string} alt={""} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailedInfo;
