import { ChangeEvent, useCallback, useState } from 'react';

import { SearchPeopleType } from '@/types/SearchPeopleType';

export const useAutocompleteManager = (people: SearchPeopleType[]) => {
  const [query, setQuery] = useState('');

  const filteredPeople = query
    ? people.filter((person) =>
        person.fullName.toLowerCase().includes(query.toLowerCase()),
      )
    : people;

  const handlerQuery = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setQuery(target.value);
    },
    [],
  );

  const inputValue = (person: SearchPeopleType) => person?.fullName;

  return {
    filteredPeople,
    inputValue,
    handlerQuery,
  };
};
