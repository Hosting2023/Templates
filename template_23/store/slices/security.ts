import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { mockKeys } from '@/components/security/constants/MockKeys';
import { ISecurityKey } from '@/components/security/interfaces/ISecurityKey';

interface InitialSecurityState {
  keys: ISecurityKey[];
  biometrics: boolean;
}

const initialState: InitialSecurityState = {
  keys: mockKeys,
  biometrics: false,
};

const securitySlice = createSlice({
  name: 'security',
  initialState,
  reducers: {
    setKeys(state, { payload }: PayloadAction<{ key: ISecurityKey }>) {
      state.keys.push(payload.key);
    },
    setBiometrics(state, { payload }: PayloadAction<boolean>) {
      state.biometrics = payload;
    },
  },
});

export const { setKeys, setBiometrics } = securitySlice.actions;

export default securitySlice.reducer;
