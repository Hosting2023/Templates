import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Schedule.module.scss";
import AuthentificationModal from "@/modals/AuthentificationModal/AuthentificationModal";
import ScheduleDay from "./ScheduleDay";
import classNames from "classnames";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface ScheduleProps {}

const Schedule: FC<ScheduleProps> = () => {
  const { t, i18n } = useTranslation();

  const sheduleItems = [
    {
      day: `${t("schedule_1")}`,
      workPeriods: [
        { startTime: 9, endTime: 11 },
        { startTime: 19, endTime: 21 },
      ],
    },
    {
      day: `${t("schedule_2")}`,
      workPeriods: [
        { startTime: 10, endTime: 13 },
        { startTime: 15, endTime: 18 },
      ],
    },
    {
      day: `${t("schedule_3")}`,
      workPeriods: [
        { startTime: 9, endTime: 12 },
        { startTime: 18, endTime: 20 },
      ],
    },
    {
      day: `${t("schedule_4")}`,
      workPeriods: [
        { startTime: 12, endTime: 14 },
        { startTime: 16, endTime: 19 },
      ],
    },
    {
      day: `${t("schedule_5")}`,
      workPeriods: [
        { startTime: 8, endTime: 11 },
        { startTime: 20, endTime: 23 },
      ],
    },
    {
      day: `${t("schedule_6")}`,
      workPeriods: [
        { startTime: 10, endTime: 13 },
        { startTime: 20, endTime: 22 },
      ],
    },
    {
      day: `${t("schedule_7")}`,
      workPeriods: [{ startTime: 14, endTime: 17 }],
    },
  ];
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [btnActive, setBtnActive] = useState<boolean>(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div className={styles.schedule_page} id={t("nav_schedule")}>
      <h2 className={styles.schedule_header}>{t("schedule_title")}</h2>
      <div className={styles.schedule_content}>
        <div
          className={
            i18n.language === "he"
              ? styles.schedule_content_right_hebrew
              : styles.schedule_content_right
          }
        >
          <div className={styles.table_wrapper}>
            <div
              className={styles.table_days_wrapper}
              style={
                i18n.language === "he"
                  ? { paddingRight: "8%", paddingLeft: "2%" }
                  : { paddingRight: "2%", paddingLeft: "8%" }
              }
            >
              {sheduleItems.map((item, idx) => (
                <ScheduleDay
                  item={item}
                  key={idx}
                  setBtnActive={setBtnActive}
                  btnActive={btnActive}
                />
              ))}
            </div>
            {isMobile ? (
              <table className={styles.table_mobile}>
                <tbody>
                  <tr>
                    <td>8.00</td>
                  </tr>
                  <tr>
                    <td>9.00</td>
                  </tr>
                  <tr>
                    <td>10.00</td>
                  </tr>
                  <tr>
                    <td>11.00</td>
                  </tr>
                  <tr>
                    <td>12.00</td>
                  </tr>
                  <tr>
                    <td>13.00</td>
                  </tr>
                  <tr>
                    <td>14.00</td>
                  </tr>
                  <tr>
                    <td>15.00</td>
                  </tr>
                  <tr>
                    <td>16.00</td>
                  </tr>
                  <tr>
                    <td>17.00</td>
                  </tr>
                  <tr>
                    <td>18.00</td>
                  </tr>
                  <tr>
                    <td>19.00</td>
                  </tr>
                  <tr>
                    <td>20.00</td>
                  </tr>
                  <tr>
                    <td>21.00</td>
                  </tr>
                  <tr>
                    <td>22.00</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <td>8.00</td>
                  </tr>
                  <tr>
                    <td>9.00</td>
                  </tr>
                  <tr>
                    <td>10.00</td>
                  </tr>
                  <tr>
                    <td>11.00</td>
                  </tr>
                  <tr>
                    <td>12.00</td>
                  </tr>
                  <tr>
                    <td>13.00</td>
                  </tr>
                  <tr>
                    <td>14.00</td>
                  </tr>
                  <tr>
                    <td>15.00</td>
                  </tr>
                  <tr>
                    <td>16.00</td>
                  </tr>
                  <tr>
                    <td>17.00</td>
                  </tr>
                  <tr>
                    <td>18.00</td>
                  </tr>
                  <tr>
                    <td>19.00</td>
                  </tr>
                  <tr>
                    <td>20.00</td>
                  </tr>
                  <tr>
                    <td>21.00</td>
                  </tr>
                  <tr>
                    <td>22.00</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
          <button
            onClick={() => {
              setModalOpened(true);
            }}
            className={classNames(
              btnActive
                ? styles.schedule_content_right_btn_active
                : styles.schedule_content_right_btn
            )}
          >
            {t("schedule_btn")}
          </button>
        </div>
      </div>
      {modalOpened ? <AuthentificationModal setModalOpened={setModalOpened} /> : ""}
    </div>
  );
};

export default Schedule;
