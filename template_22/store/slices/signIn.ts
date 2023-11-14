import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: '',
  password: '',
};

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<string>) {
      state.login = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

export const { setLogin, setPassword } = signInSlice.actions;

export default signInSlice.reducer;
