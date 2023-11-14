import React, { useState } from "react";
import style from "./styles.module.scss";
import Image from "next/image";
import Registration from "../Registration/index";
import { wrapperImgClasses, navTitles } from "./constants/NavTitles";
import { IMenuProps } from "./interfaces/IMenuProps";


function Header({ servicesRef, scheduleRef, reviewsRef }: IMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние модального окна

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    console.log('+');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    switch (sectionId) {
      case "services":
        servicesRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "schedule":
        scheduleRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "reviews":
        reviewsRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperImgs}>
        {wrapperImgClasses.map((imgClass, index) => (
          <Image key={index} src={imgClass} alt="" />
        ))}
      </div>
      <div className={style.nav}>
        {navTitles.map((title, index) => (
          <p
            key={index}
            onClick={() => handleScrollToSection(title)}
            style={{ cursor: "pointer" }}
          >
            {title}
          </p>
        ))}
      </div>
      <div className={style.btns}>
        <div onClick={openModal}>sign up</div>
        <div onClick={openModal}>log in</div>
      </div>
      <div className={style.menuBtn} onClick={toggleMenu}>
        Menu
      </div>
      {isMenuOpen && (
        <div className={style.menu}>
          {wrapperImgClasses.map((imgClass, index) => (
            <Image key={index} src={imgClass} alt="" />
          ))}
          {navTitles.map((title, index) => (
            <p key={index} onClick={() => handleScrollToSection(title)}>
              {title}
            </p>
          ))}
          <p onClick={openModal}>sign Up</p>
          <p onClick={openModal}>log In</p>
        </div>
      )}

      {isModalOpen && <Registration onClose={closeModal} />}
    </div>
  );
}

export default Header;
