import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IInitialPaymentState {
  cardNumber: string;
  expMonth: number | '';
  year: number | '';
  code: string;
}

const initialState: IInitialPaymentState = {
  cardNumber: '',
  expMonth: '',
  year: '',
  code: '',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setCardNumber(state, { payload }: PayloadAction<string>) {
      state.cardNumber = payload;
    },
    setExpMonth(state, { payload }: PayloadAction<number>) {
      state.expMonth = payload;
    },
    setYear(state, { payload }: PayloadAction<number>) {
      state.year = payload;
    },
    setCode(state, { payload }: PayloadAction<string>) {
      state.code = payload;
    },
  },
});

export const { setCardNumber, setExpMonth, setYear, setCode } =
  paymentSlice.actions;

export default paymentSlice.reducer;
