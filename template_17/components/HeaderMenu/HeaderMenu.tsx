"use client";
import { useParams } from "next/navigation";
import { KEYSMENU } from "./menu";
import { TranslateType } from "@/types";

import styles from "./HeaderMenu.module.scss";

type HeaderMenuProps = {
    menu: TranslateType;
    closeMenu: () => void;
};

const HeaderMenu = ({ menu, closeMenu }: HeaderMenuProps) => {
    const { locale } = useParams();
    const isEn: boolean = locale === "en";

    return (
        <div className={styles.menu}>
            <nav className={styles.menu__body}>
                <ul className={styles.menu__list}>
                    {KEYSMENU.map((item) => (
                        <a
                            className={
                                isEn ? styles.menu__item : styles.menu__item_he
                            }
                            key={item}
                            href={`#${item}`}
                        >
                            <li>{menu[item]}</li>
                        </a>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default HeaderMenu;
