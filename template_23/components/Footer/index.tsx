import { socialIcons } from "./constants/socialIcons";
import style from "./styles.module.scss";
import Image from "next/image";

function Footer() {
  return (
    <div className={style.wrapper}>
      {socialIcons.map((social, index) => (
        <div className={style.item} key={index}>
          <Image src={social.icon as unknown as string} alt={""} />
          <p>{social.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Footer;
