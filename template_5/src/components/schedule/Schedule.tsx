import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import styles from "./Schedule.module.scss";
import ScheduleDay from "./ScheduleDay";
import AuthentificationModal from "../Modal/AuthentificationModal/AuthentificationModal";

const Schedule: FC = () => {
  const { t } = useTranslation();
  const scheduleDays = [
    {
      day: `${t("schedule_1")}`,
      appointments: ["8:00-12:00", "0", "0"],
    },
    {
      day: `${t("schedule_2")}`,
      appointments: ["0", "12:00-16:00", "0"],
    },
    {
      day: `${t("schedule_3")}`,
      appointments: ["8:00-12:00", "0", "20:00-22:00"],
    },
    {
      day: `${t("schedule_4")}`,
      appointments: ["8:00-12:00", "0", "0"],
    },
    {
      day: `${t("schedule_5")}`,
      appointments: ["0", "12:00-16:00", "0"],
    },
    {
      day: `${t("schedule_6")}`,
      appointments: ["0", "12:00-16:00", "20:00-22:00"],
    },
    {
      day: `${t("schedule_7")}`,
      appointments: ["8:00-12:00", "0", "20:00-22:00"],
    },
  ];

  const [btnActive, setBtnActive] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [activeDay, setActiveDay] = useState<number>(2);

  return (
    <div className={styles.schedule_wrapper} id="schedule">
      <div className={styles.schedule_wrapper_lines}>
        {[...Array(5)].map((i, idx) => (
          <div id={i} key={idx}></div>
        ))}
      </div>
      <div className={styles.schedule_calendar}>
        {scheduleDays.map((item, index) => (
          <ScheduleDay
            day={item.day}
            appointments={item.appointments}
            btnActive={btnActive}
            setBtnActive={setBtnActive}
            key={index}
            dayNum={index}
            activeDay={activeDay}
            setActiveDay={setActiveDay}
          />
        ))}
      </div>
      <button
        className={classNames(
          btnActive ? styles.schedule_orderBtn_active : styles.schedule_orderBtn
        )}
        onClick={() => setModalOpened(true)}
      >
        {t("schedule_btn")}
      </button>
      {modalOpened ? <AuthentificationModal setModalOpened={setModalOpened} /> : ""}
    </div>
  );
};

export default Schedule;
