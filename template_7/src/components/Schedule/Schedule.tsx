import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
// import classNames from 'classnames';

import styles from "./Schedule.module.scss";
import ScheduleDay from "./ScheduleDay";
import MainButton from "@/src/ui/Buttons/MainButton/MainButton";
import AuthentificationModal from "@/src/modals/AuthentificationModal/AuthentificationModal";
import { GetWorkerInfo, useAppSelector } from "@hosting2023/redux-lib";

const Schedule: FC = () => {
  const sc = useAppSelector(GetWorkerInfo);
  const { t } = useTranslation();
  const [activeDay, setActiveDay] = useState<string>("MON");
  const [btnActive, setBtnActive] = useState<boolean>(false);
  const [modalActive, setModalActive] = useState<boolean>(false);

  console.log(sc ? sc[0] : "");

  // console.log(sc ? parseInt(sc[0].profile.schedule[1].startTime) : '');

  return (
    <div className={styles.schedule_page} id={t("nav_schedule")}>
      <div className={styles.schedule_content}>
        {sc
          ? sc[0]?.profile.schedule.map((item) =>
              item.activeWeekdays.map((day, idx) => (
                <ScheduleDay
                  setActiveDay={setActiveDay}
                  setBtnActive={setBtnActive}
                  key={idx}
                  day={day}
                  appointments={
                    parseInt(item.startTime) <= 9
                      ? [
                          { start: item.startTime, end: item.endTime },
                          { start: "0", end: "0" },
                          { start: "0", end: "0" },
                        ]
                      : parseInt(item.startTime) > 9 && parseInt(item.startTime) <= 17
                      ? [
                          { start: "0", end: "0" },
                          { start: item.startTime, end: item.endTime },
                          { start: "0", end: "0" },
                        ]
                      : parseInt(item.startTime) > 17 && parseInt(item.startTime) <= 24
                      ? [
                          { start: "0", end: "0" },
                          { start: "0", end: "0" },
                          { start: item.startTime, end: item.endTime },
                        ]
                      : []
                  }
                  isActive={activeDay === day ? true : false}
                />
              ))
            )
          : ""}
      </div>
      <div className={styles.schedule_btn} onClick={() => setModalActive(true)}>
        <MainButton item={t("schedule_btn")} width={"20%"} isActive={btnActive} />
      </div>
      {modalActive ? <AuthentificationModal setModalOpened={setModalActive} /> : ""}
    </div>
  );
};

export default Schedule;
