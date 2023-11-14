import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GoogleMapsState {
  isLoaded: boolean;
}

const initialState: GoogleMapsState = {
  isLoaded: false,
};

const googleMapsSlice = createSlice({
  name: 'googleMaps',
  initialState,
  reducers: {
    setIsLoading(state, payload: PayloadAction<boolean>) {
      state.isLoaded = payload.payload;
    },
  },
});

export const { setIsLoading } = googleMapsSlice.actions;

export default googleMapsSlice.reducer;
