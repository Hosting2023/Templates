import type { FC } from 'react';
import React from 'react';
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IRadioGroupProps {
  caption: string;
  options: string[];
  id?: string;
  onChange?: (option: string) => void;
  defaultValue?: string;
  value?: string;
  className?: string;
  onChangeForm?: (val1: string, val2: string) => void;
}

const RadioGroupInput: FC<IRadioGroupProps> = ({
  caption,
  options,
  className,
  id = '',
  onChange = () => {
    console.log('here');
  },
  defaultValue = options[0],
  onChangeForm,
  value,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleChange = (option: string) => {
    setSelectedOption(option);
    if (onChangeForm) {
      onChangeForm(id, option);
    }
    onChange(option);
  };

  return (
    <RadioGroup
      id={id}
      defaultValue={selectedOption}
      value={value}
      onChange={handleChange}
      className={cn(styles.container, className)}
    >
      <RadioGroup.Label>{caption}</RadioGroup.Label>
      <div className={styles.list}>
        {options.map((option) => (
          <RadioGroup.Option
            key={option}
            value={option}
          >
            {({ checked }) => (
              <li
                className={cn(
                  styles.listItem,
                  checked && styles.activeListItem,
                )}
              >
                {option}
              </li>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default RadioGroupInput;
