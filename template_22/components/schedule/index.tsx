import React, { FC, useContext, useState } from 'react';
import { getClassNames } from './config';
import styles from './styles.module.scss';
import RegistrationModal from '../registr/modalRegistration';
import {
  daysOfWeek,
  daysOfWeek_heb,
} from '@/components/schedule/constants/DaysOfWeek';
import { AppContext } from '../../pages/_app';

export interface IActiveButton {
  day: string;
  time: string;
}

const Schedule: FC = () => {
  const Heb = useContext(AppContext);
  const [activeButtons, setActiveButtons] = useState<IActiveButton[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const days = Heb ? daysOfWeek_heb : daysOfWeek;

  const handleDateButtonClick = (day: string, time: string) => {
    // Проверяем, если кнопка уже выбрана, удаляем ее из активных
    const buttonIndex = activeButtons.findIndex(
      (button) => button.day === day && button.time === time,
    );
    if (buttonIndex !== -1) {
      const newActiveButtons = [...activeButtons];
      newActiveButtons.splice(buttonIndex, 1);
      setActiveButtons(newActiveButtons);
    } else {
      // Иначе, добавляем ее к активным
      setActiveButtons([...activeButtons, { day, time }]);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.scheduleWrapper}>
      <div className={styles.title}>{Heb ? 'לוח זמנים' : 'Schedule'}</div>
      <div className={styles.scheduleContainer}>
        {days.map((day, index) => (
          <div
            key={index}
            className={styles.dayColumn}
          >
            <h3 className={styles.day}>{day.name}</h3>
            <div className={styles.dateList}>
              {day.availableTime.map((time) => (
                <button
                  key={time}
                  className={
                    getClassNames(activeButtons, {
                      day: day.name,
                      time: time,
                    }).buttonClassName
                  }
                  onClick={() => handleDateButtonClick(day.name, time)}
                >
                  <span className={styles.time}>{time}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className={styles.button}
        onClick={openModal}
      >
        <span className={styles.textButton}>{Heb ? 'להזמין' : 'Order'}</span>
      </button>
      {isModalOpen && <RegistrationModal onClose={closeModal} />}
    </div>
  );
};

export default Schedule;
