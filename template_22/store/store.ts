import type { ConfigureStoreOptions } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { apiSlice } from './services/api';
import conditionsSlice from './slices/conditions';
import forgotPasswordSlice from './slices/forgotPassword';
import googleMapSlice from './slices/googleMap';
import paymentSlice from './slices/payment';
import signInSlice from './slices/signIn';

const createNoopStorage = () => ({
  getItem(_key: any) {
    return Promise.resolve(null);
  },
  setItem(_key: any, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: any) {
    return Promise.resolve();
  },
});
export const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['signUp', 'signIn', 'forgotPassword', 'calendar'],
};

const rootReducer = combineReducers({
  conditions: conditionsSlice,
  signIn: signInSlice,
  payment: paymentSlice,
  forgotPassword: forgotPasswordSlice,
  googleMaps: googleMapSlice,

  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined,
) =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(apiSlice.middleware),
    ...options,
  });

export const store = createStore();

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
