import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface ConditionsState {
  conditions: boolean | null;
}

const initialState: ConditionsState = {
  conditions: null,
};

const conditionsSlice = createSlice({
  name: 'conditions',
  initialState,
  reducers: {
    setConditions(state, { payload }: PayloadAction<boolean>) {
      state.conditions = payload;
    },
  },
});

export const { setConditions } = conditionsSlice.actions;

export default conditionsSlice.reducer;
