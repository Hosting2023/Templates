import { DetailedHTMLProps, InputHTMLAttributes, Ref } from 'react';

import { SearchPeopleType } from '@/types/SearchPeopleType';

import { AutocompleteType } from './AutocompleteType';

export interface IAutocompleteInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  people: SearchPeopleType[];
  selectedPerson: SearchPeopleType | null;
  setSelectedPerson: (value: SearchPeopleType) => void;
  type?: AutocompleteType;
  ref?: Ref<HTMLInputElement>;
}
