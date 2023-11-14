import React, { useState, useEffect, useRef } from 'react';
import * as yup from 'yup';
import styles from './ModalSignUp.module.scss';
import Image from 'next/image';
import calendar_image from '@/public/Calendar.svg';

function formatDate(date: Date): string {
   const day = String(date.getDate()).padStart(2, '0');
   const month = String(date.getMonth() + 1).padStart(2, '0');
   const year = date.getFullYear();
   return `${day}.${month}.${year}`;
}

function ModalSignUp() {
   const [page, setPage] = useState<number>(1);

   const handleNextPage = () => {
      setPage((prevPage: number) => prevPage + 1);
   };

   const handleSend = () => {

   };

   return (
      <div className={styles.content_singup}>
         <h1 className={styles['modal-register']}>Sign Up</h1>
         {page === 1 ? <ModalPage1 handleNextPage={handleNextPage} /> : <ModalPage2 handleSend={handleSend} />}
      </div>

   );
}

export default ModalSignUp




const page1Schema = yup.object().shape({
   name: yup.string().trim().required('Name is required'),
   lastName: yup.string().trim().required('Last Name is required'),
   date: yup.date().nullable().required('Date of birthday is required'),
});

const ModalPage1 = ({ handleNextPage }: any) => {
   const [name, setName] = useState<string>('');
   const [lastName, setLastName] = useState<string>('');
   const [calendar, setCalendar] = useState<boolean>(false);
   const [date, setDate] = useState<Date | null>(null);
   const [nameError, setNameError] = useState<string>('');
   const [lastNameError, setLastNameError] = useState<string>('');
   const [dateError, setDateError] = useState<string>('');
   const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
   const calendarRef = useRef<HTMLDivElement>(null);

   const GetDate = (date: Date) => {
      setDate(date);
   };

   useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
         if (calendarRef.current && !calendarRef.current.contains(event.target as Node) && calendar) {
            setCalendar(false);
         }
      };

      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
         document.removeEventListener('mousedown', handleOutsideClick);
      };
   }, [calendar]);

   const validateForm = async () => {
      try {
         await page1Schema.validate({ name, lastName, date }, { abortEarly: false });
         setNameError('');
         setLastNameError('');
         setDateError('');
         return true;
      } catch (err: any) {
         const errors = err.inner.reduce((acc: any, current: any) => {
            acc[current.path] = current.message;
            return acc;
         }, {});
         setNameError(errors.name || '');
         setLastNameError(errors.lastName || '');
         setDateError(errors.date || '');
         return false;
      }
   };

   useEffect(() => {
      if (formSubmitted) {
         validateForm();
      }
   }, [formSubmitted, name, lastName, date]);

   const handleNextPages = async () => {
      setFormSubmitted(true);
      if (await validateForm()) {
         handleNextPage();
      }
   };

   return (
      <div className={styles.form}>
         <div className={styles['input-container']}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            {nameError && <div className={styles['error-message']}>{nameError}</div>}
         </div>
         <div className={styles['input-container']}>
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            {lastNameError && <div className={styles['error-message']}>{lastNameError}</div>}
         </div>
         <div className={styles.block_date}>
            {calendar && (
               <div ref={calendarRef} className={styles.calendar_hide}>
                  <Calendar GetDate={GetDate} selectedDates={date} />
               </div>
            )}
            <div className={styles.date} onClick={() => setCalendar(!calendar)}>
               <div className={styles.name}>{date ? formatDate(date) : 'Date of birthday'}</div>
               <div className={styles.img}>{dateError ? <div className={styles['error-message']}>{dateError}</div> : <Image width={30} src={calendar_image} alt="calendar" />}</div>
            </div>
         </div>
         <button className={`${styles.button} btn`} onClick={handleNextPages}>
            Next
         </button>
      </div>

   );
};



const page2Schema = yup.object().shape({
   email: yup.string().trim().email('Invalid email format').required('Email is required'),
   mobile: yup
      .string()
      .trim()
      .required('Mobile is required')
      .test('phone', 'Invalid mobil format', (value) => {
         const phoneRegex = /^\+[0-9]+$/;
         return phoneRegex.test(value || '');
      }),
});

const ModalPage2 = ({ handleSend }: any) => {
   const [email, setEmail] = useState<string>('');
   const [mobile, setMobile] = useState<string>('');
   const [emailError, setEmailError] = useState<string>('');
   const [mobileError, setMobileError] = useState<string>('');
   const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

   const validateFormTwo = async () => {
      try {
         await page2Schema.validate({ email, mobile }, { abortEarly: false });
         setEmailError('');
         setMobileError('');
         return true;
      } catch (err: any) {
         const errors = err.inner.reduce((acc: any, current: any) => {
            acc[current.path] = current.message;
            return acc;
         }, {});
         setEmailError(errors.email || '');
         setMobileError(errors.mobile || '');
         return false;
      }
   };

   useEffect(() => {
      if (formSubmitted) {
         validateFormTwo();
      }
   }, [formSubmitted, email, mobile]);

   const handleSendClick = async () => {
      setFormSubmitted(true);
      if (await validateFormTwo()) {
         handleSend();
      }
   };

   return (
      <div className={styles.form}>
         <div className={`${styles['input-container']} ${emailError ? styles['error-input'] : ''}`}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {emailError && <div className={styles['error-message']}>{emailError}</div>}
         </div>
         <div className={`${styles['input-container']} ${mobileError ? styles['error-input'] : ''}`}>
            <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            {mobileError && <div className={styles['error-message']}>{mobileError}</div>}
         </div>
         <button className={styles.button} onClick={handleSendClick}>
            Send
         </button>
      </div>

   );
};


function Calendar({ GetDate, selectedDates }: any) {
   const currentDate = new Date();
   const [selectedDate, setSelectedDate] = useState<Date>(selectedDates || currentDate);
   useEffect(() => {
      GetDate(selectedDate)
   }, [selectedDate, setSelectedDate])

   const prevDay = () => {
      const prevDate = new Date(selectedDate);
      prevDate.setDate(prevDate.getDate() - 1);
      setSelectedDate(prevDate);
   };

   const nextDay = () => {
      const nextDate = new Date(selectedDate);
      nextDate.setDate(nextDate.getDate() + 1);
      setSelectedDate(nextDate);
   };

   const formatDate = (date: Date) => {
      return date.toLocaleString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
   };

   const daysInWeek = 5;
   const days = Array.from({ length: daysInWeek }, (_, index) => {
      const currentDate = new Date(selectedDate);
      currentDate.setDate(currentDate.getDate() - Math.floor(daysInWeek / 2) + index);
      return currentDate;
   });

   return (
      <div className={styles['calendar-container']}>
         <div className={styles['month-year']}>
            {selectedDate.toLocaleString(undefined, { month: 'long', year: 'numeric' })}
         </div>
         <div className={styles['dates-container']}>
            {days.map((day, index) => (
               <div
                  key={`day-${index}`}
                  className={`${styles['date-box']} ${day.toDateString() === currentDate.toDateString() ? styles['today'] : ''}`}
               >
                  <div className={styles['day-details']}>{formatDate(day)}</div>
               </div>
            ))}
         </div>
         <div className={styles['date-buttons']}>
            <button className={`${styles['nav-button']} ${styles['prev-button']}`} onClick={prevDay}>
               Back
            </button>
            <button className={`${styles['nav-button']} ${styles['next-button']}`} onClick={nextDay}>
               Next
            </button>
         </div>
      </div>

   );
}



