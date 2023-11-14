import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { IsPrivateHouse } from '@/components/registration/maidRegistration2/constants/IsPrivateHouse';
import { ProfileType } from '@/components/registration/maidRegistration2/constants/ProfileType';

import { IFormsState } from '@/components/registration/maidRegistration2/interfaces/IFormsState';

import { CreateProfileDto } from '../services/profile/dto/create-profile.dto';
import { ScheduleDataProps } from '@/components/registration/maidRegistration2/extraInfo/schedule/table/Table';

interface maidRegistrationState {
  profile: CreateProfileDto;
  formsState: IFormsState;
  avatars: string[];
  selectedAvatarIndex: number;
  schedulePreview: ScheduleDataProps;
}

const schedulePreviewInitialState: ScheduleDataProps = {
  id: 0,
  startTime: '00:00',
  endTime: '00:00',
  activeWeekdays: [],
};

const initialState: maidRegistrationState = {
  profile: {
    profileType: ProfileType.Housekeeper,
    description: '',
    allergy: [],
    language: [],
    durationFromHomeToWork: '',
    durationFromWorkToWork: '',

    travelModeFromHomeToWork: '',

    travelModeFromWorkToWork: '',

    sites: ['http://hdrezka.me/'],

    fullAddress: '',

    isPrivateHouse: IsPrivateHouse.No,

    apartmentNumber: '',

    entranceNumber: '',

    entranceCode: '',

    isMain: true,

    address: '',

    schedule: [],

    oneOffOrderOptions: [],

    pricePerHour: '00.00',

    transportFare: '00.00',
  },

  avatars: [],
  formsState: {
    profileChoosing: { isOpen: false },
    generalInfo: { isOpen: false },
    photoAdding: { isOpen: false },
    description: { isOpen: false },
    allergy: { isOpen: false },
    languages: { isOpen: false },
    routes: { isOpen: false },
    schedule: { isOpen: false },
    workTypes: { isOpen: false },
    charge: { isOpen: false },
  },
  selectedAvatarIndex: 0,
  schedulePreview: schedulePreviewInitialState,
};

const maidRegistrationSlice = createSlice({
  name: 'maidRegistration',
  initialState,
  reducers: {
    openForm(state, { payload: formName }: PayloadAction<keyof IFormsState>) {
      state.formsState = {
        ...state.formsState,
        [formName]: { ...state.formsState[formName], isOpen: true },
      };
    },
    closeForm(state, { payload: formName }: PayloadAction<keyof IFormsState>) {
      state.formsState = {
        ...state.formsState,
        [formName]: { ...state.formsState[formName], isOpen: false },
      };
    },
    addSchedule(state, { payload }: PayloadAction<ScheduleDataProps[]>) {
      state.profile.schedule.push(...payload);
    },

    removeSchedule(state, { payload }: PayloadAction<number>) {
      const index = state.profile.schedule.findIndex(
        (item) => item.id === payload,
      );
      state.profile.schedule.splice(index, 1);
    },
    editSchedule(state, { payload }: PayloadAction<ScheduleDataProps>) {
      const index = state.profile.schedule.findIndex(
        (item) => item.id === payload.id,
      );
      if (index !== -1) {
        state.profile.schedule[index] = {
          ...state.profile.schedule[index],
          ...payload,
        };
      }
    },

    setSchedulePreview(state, { payload }: PayloadAction<ScheduleDataProps>) {
      state.schedulePreview = payload;
    },

    clearSchedulePreview(state) {
      state.schedulePreview = schedulePreviewInitialState;
    },

    setProfileFieldValue: {
      reducer<K extends keyof CreateProfileDto>(
        state: Draft<maidRegistrationState>,
        action: PayloadAction<{ fieldName: K; newValue: CreateProfileDto[K] }>,
      ) {
        const { fieldName, newValue } = action.payload;
        state.profile[fieldName] = newValue;
      },

      prepare<K extends keyof CreateProfileDto>(
        fieldName: K,
        newValue: CreateProfileDto[K],
      ) {
        return { payload: { fieldName, newValue } };
      },
    },

    addAvatar(state, { payload }: PayloadAction<string | string[]>) {
      if (Array.isArray(payload)) {
        state.avatars = [...state.avatars, ...payload];
      } else {
        state.avatars = [...state.avatars, payload];
      }
    },
    setSelectedAvatarIndex(store, { payload }: PayloadAction<number>) {
      store.selectedAvatarIndex = payload;
    },

    resetMaidRegistration: () => initialState,
  },
});

export const {
  openForm,
  closeForm,
  setProfileFieldValue,
  resetMaidRegistration,
  addAvatar,
  setSelectedAvatarIndex,
  addSchedule,
  removeSchedule,
  editSchedule,
  setSchedulePreview,
  clearSchedulePreview,
} = maidRegistrationSlice.actions;

export default maidRegistrationSlice.reducer;
