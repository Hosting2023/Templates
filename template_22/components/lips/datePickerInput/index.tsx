import type { FC } from 'react';
import React from 'react';
import { useState } from 'react';
import { Popover } from '@headlessui/react';
import cn from 'classnames';
import Image from 'next/image';

import calendar from '@/assets/icons/calendar.svg';
import { DatePickerWithSwiper } from '@/components/lips';
import { convertShortDate } from '@/utils/date/dateFormat/convertDate';

import styles from './styles.module.scss';

interface IDatePickerInputProps {
  value?: string;
  id?: string;
  onChange?: (inputValue: string) => void;
  caption?: string;
  language?: string;
  onChangeForm?: (val: string, val2: string) => void;
  name?: string;
}

const DatePickerInput: FC<IDatePickerInputProps> = ({
  value,
  id = '',
  onChange = () => {
    console.log('here');
  },
  caption = 'Date of birth',
  language = 'en',
  onChangeForm,
  name,
}) => {
  const [date, setDate] = useState(value);

  const onChangeInput = (inputValue: Date) => {
    if (onChangeForm) {
      onChangeForm('dateOfBirth', inputValue.toString());
    }
    setDate(inputValue.toString());
    onChange(inputValue.toString());
  };

  const swiperDate = new Date(date || '2000-01-01');

  return (
    <div className={styles.inputWrapper}>
      <span className={cn(styles.birth, styles.position)}>{caption}</span>
      <input
        name={name}
        type="text"
        id={id}
        value={date ? convertShortDate(new Date(date)) : date}
        onChange={(e) => onChangeInput(new Date(e.currentTarget.value))}
        className={styles.input}
        max={convertShortDate(new Date())}
        min={convertShortDate(
          new Date(new Date().setFullYear(new Date().getFullYear() - 100)),
        )}
      />
      <Popover>
        {({ close }) => (
          <>
            <Popover.Button className={cn(styles.calendar, styles.position)}>
              <Image
                src={calendar as unknown as string}
                alt="calendar"
              />
            </Popover.Button>
            <Popover.Panel>
              <DatePickerWithSwiper
                onDateChange={onChangeInput}
                onClose={close}
                currentDate={swiperDate}
                language={language}
              />
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  );
};
export default DatePickerInput;
