import { FC, Fragment } from 'react';
import React from 'react';
import { Combobox } from '@headlessui/react';
import Image from 'next/image';

import { Text } from '@/components/lips';

import { AutocompleteText } from './constants/AutocompleteText';
import { useAutocompleteManager } from './helpers/useAutocompleteManager';
import { IAutocompleteInputProps } from './interfaces/AutocompleteInputProps';
import { getClassNames } from './config';

import styles from './styles.module.scss';

const AutocompleteInput: FC<IAutocompleteInputProps> = ({
  people,
  selectedPerson,
  setSelectedPerson,
  type = 'border',
  ...props
}) => {
  const { filteredPeople, inputValue, handlerQuery } =
    useAutocompleteManager(people);

  const optionsInner = () =>
    filteredPeople.length ? (
      filteredPeople.map((person) => (
        <Combobox.Option
          as={Fragment}
          key={person.id}
          value={person}
        >
          {({ active }) => (
            <div className={getClassNames({ active }).comboBoxOptionClassName}>
              <Image
                src={person.photo}
                alt={AutocompleteText.PhotoAlt}
                className={styles.photo}
              />
              <Text size="sm">{person.fullName}</Text>
            </div>
          )}
        </Combobox.Option>
      ))
    ) : (
      <div className={styles.option}>
        <Text size="sm">{AutocompleteText.NothingFound}</Text>
      </div>
    );

  return (
    <Combobox
      as="div"
      className={styles.container}
      value={selectedPerson}
      onChange={setSelectedPerson}
      nullable
    >
      <Combobox.Input
        onChange={handlerQuery.bind(this)}
        as="input"
        displayValue={inputValue}
        className={getClassNames({ type }).comboBoxInputClassName}
        {...props}
      />
      <Combobox.Options
        as="div"
        className={styles.optionsWrapper}
      >
        {optionsInner()}
      </Combobox.Options>
    </Combobox>
  );
};

export default AutocompleteInput;
