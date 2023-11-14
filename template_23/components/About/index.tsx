import style from "./styles.module.scss";
import imageAbout from "@/assets/imageAbout.svg";
import stars from "@/assets/about/stars.svg"
import Image from "next/image";

function About() {
  return (
    <div className={style.wrapper}>
        <div className={style.imagesWrapper}>
          <Image  className={style.starImg} src={stars as unknown as string} alt={""} />
          <Image  className={style.image} src={imageAbout as unknown as string} alt={""}/>
        </div>

        <div className={style.description}>
          <h2>About me</h2>
          <p>
            Hello! My name is Zari and I am a maid with experience in cleaning
            and housekeeping. I am passionate about my profession and strive to
            create the perfect environment for my clients. Satisfying your needs
            and providing an impeccable service is my top priority.
            <br />
            <br />
            My approach is based on mindfulness, precision and thoroughness, and
            I strive to create the perfect space. I have a sense of privacy and
            trust and promise to treat your personal spaces and belongings with
            respect and care.
            <br />
            <br />
            Sincerely, Zari.
          </p>
        </div>
      </div>
  );
}

export default About;
