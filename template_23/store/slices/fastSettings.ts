import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { FrequencyType } from '@/components/fastSettings/interfaces/FrequencyType';
import { OptionsValuesType } from '@/components/lips/listboxOptions/interfaces/OptionsValuesType';

interface InitialState {
  address: string;
  house: string;
  frequency: FrequencyType;
  cleaning: OptionsValuesType[];
  pets: OptionsValuesType[];
}

const initialState: InitialState = {
  address: '',
  house: '',
  frequency: 'Weekly',
  cleaning: [],
  pets: [],
};

const fastSettingsSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    setAddress(state, { payload }: PayloadAction<string>) {
      state.address = payload;
    },
    setHouse(state, { payload }: PayloadAction<string>) {
      state.house = payload;
    },
    setFrequency(state, { payload }: PayloadAction<FrequencyType>) {
      state.frequency = payload;
    },
    setCleaningOptions(state, { payload }: PayloadAction<OptionsValuesType[]>) {
      state.cleaning = [...payload];
    },
    setPets(state, { payload }: PayloadAction<OptionsValuesType[]>) {
      state.pets = [...payload];
    },
  },
});

export const {
  setAddress,
  setHouse,
  setFrequency,
  setCleaningOptions,
  setPets,
} = fastSettingsSlice.actions;

export default fastSettingsSlice.reducer;
