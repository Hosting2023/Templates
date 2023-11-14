import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// TODO: add type
const initialState = {
  email: '',
  code: '',
};

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    setEmail(state, { payload }: PayloadAction<string>) {
      state.email = payload;
    },
    setCode(state, { payload }: PayloadAction<string>) {
      state.code = payload;
    },
  },
});

export const { setEmail, setCode } = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;
