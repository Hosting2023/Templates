import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// TODO: Add type
const initialState = {
  generalInfo: {
    firstName: '',
    lastName: '',
    gender: 'Female',
    birth: '',
  },
  verification: {
    email: '',
    phone: '',
  },
  address: {
    address: '',
    privateHouse: 'No',
    apartmentNumber: '',
    entranceNumber: '',
    entranceCode: '',
  },
  password: {
    password: '',
    passwordConfirmation: '',
  },
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setFirstName(state, { payload }: PayloadAction<string>) {
      state.generalInfo.firstName = payload;
    },
    setLastName(state, { payload }: PayloadAction<string>) {
      state.generalInfo.lastName = payload;
    },
    setGender(state, { payload }: PayloadAction<string>) {
      state.generalInfo.gender = payload;
    },
    setBirth(state, { payload }: PayloadAction<string>) {
      state.generalInfo.birth = payload;
    },

    setEmail(state, { payload }: PayloadAction<string>) {
      state.verification.email = payload;
    },
    setPhoneNumber(state, { payload }: PayloadAction<string>) {
      state.verification.phone = payload;
    },

    setAddress(state, { payload }: PayloadAction<string>) {
      state.address.address = payload;
    },
    setPrivateHouse(state, { payload }: PayloadAction<string>) {
      state.address.privateHouse = payload;
    },
    setApartmentNumber(state, { payload }: PayloadAction<string>) {
      state.address.apartmentNumber = payload;
    },
    setEntranceNumber(state, { payload }: PayloadAction<string>) {
      state.address.entranceNumber = payload;
    },
    setEntranceCode(state, { payload }: PayloadAction<string>) {
      state.address.entranceCode = payload;
    },

    setPassword(
      state,
      { payload }: PayloadAction<typeof initialState.password>,
    ) {
      state.password.password = payload.password;
      state.password.passwordConfirmation = payload.passwordConfirmation;
    },

    resetAll() {
      return {
        generalInfo: {
          firstName: '',
          lastName: '',
          gender: 'Male',
          birth: '',
        },
        verification: {
          email: '',
          phone: '',
        },
        address: {
          address: '',
          privateHouse: 'No',
          apartmentNumber: '',
          entranceNumber: '',
          entranceCode: '',
        },
        password: {
          password: '',
          passwordConfirmation: '',
        },
      };
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setGender,
  setBirth,
  resetAll,
  setApartmentNumber,
  setEntranceNumber,
  setEntranceCode,
  setPhoneNumber,
  setEmail,
  setPrivateHouse,
  setAddress,
  setPassword,
} = signUpSlice.actions;

export default signUpSlice.reducer;
