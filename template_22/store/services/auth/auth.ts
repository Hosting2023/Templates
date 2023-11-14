import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { apiClient } from 'lib/apiClient/apiClient';

import type { InitFormikValuesResetPassword } from '@/components/registr/resetPassword/form-model/reset-password.interfaces';
import type { InitFormikValuesSignIn } from '@/components/registr/modalRegistration/logIn/form-model/sign-in.interfaces';
import type {
  InitFormikValues,
  InitFormikValuesGetVerifyCode,
} from '@/components/registr/modalRegistration/signUp/form-model/sign-up.interfaces';

import { apiSlice } from '../api';
import { PathRequest } from '../path-request.enum';
import { UserWithProfiles } from '../profile/dto/get-user-profile.response';

import { GetEmailVerifyCodeResponse } from './dto/get-email-verify-code.response';
import { GetVerifyCodeResponse } from './dto/get-verify-code.response';
import type { LoginResponse } from './dto/login.response';
import type { RegistrationResponse } from './dto/registration.response';

export const registrationApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    registration: build.mutation<
      RegistrationResponse | string | unknown,
      InitFormikValues
    >({
      async queryFn(payload: InitFormikValues) {
        const response = (await apiClient.post<RegistrationResponse>(
          PathRequest.Registration,
          payload,
        )) as QueryReturnValue<
          unknown,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        >;
        if (typeof response === 'object' && 'data' in response!) {
          return { data: response };
        }
        return response;
      },
    }),
    login: build.mutation<
      LoginResponse | string | unknown,
      InitFormikValuesSignIn
    >({
      async queryFn(payload: InitFormikValuesSignIn) {
        const response = await apiClient.post<LoginResponse>(
          PathRequest.Login,
          payload,
        );
        return { data: response };
      },
    }),
    resetPassword: build.mutation<
      void | string | unknown,
      InitFormikValuesResetPassword
    >({
      async queryFn(payload: InitFormikValuesResetPassword) {
        const response = await apiClient.post<void>(
          PathRequest.ResetPassword,
          payload,
        );
        return { data: response };
      },
    }),
    forgotPasswordFetch: build.mutation<
      void | string | unknown,
      { email: string }
    >({
      async queryFn(payload: { email: string }) {
        const response = await apiClient.post<void>(
          PathRequest.ForgotPassword,
          payload,
        );
        return { data: response };
      },
    }),
    getVerifyCode: build.mutation<
      GetVerifyCodeResponse | string | unknown,
      InitFormikValuesGetVerifyCode
    >({
      async queryFn(payload: InitFormikValuesGetVerifyCode) {
        const response = await apiClient.post<GetVerifyCodeResponse>(
          PathRequest.GetVerifyCode,
          payload,
        );
        return { data: response };
      },
    }),
    getEmailVerifyCode: build.mutation<
      GetEmailVerifyCodeResponse | string | unknown,
      { email: string }
    >({
      async queryFn(payload: { email: string }) {
        const response = await apiClient.post<GetEmailVerifyCodeResponse>(
          PathRequest.GetEmailVerifyCode,
          payload,
        );
        return { data: response };
      },
    }),
    updateUser: build.mutation<
      UserWithProfiles | string | unknown,
      Omit<UserWithProfiles, 'profiles'>
    >({
      async queryFn(payload: Omit<UserWithProfiles, 'profiles'>) {
        const response = await apiClient.put<UserWithProfiles>(
          PathRequest.Update,
          payload,
        );
        return { data: response };
      },
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useResetPasswordMutation,
  useForgotPasswordFetchMutation,
  useGetVerifyCodeMutation,
  useGetEmailVerifyCodeMutation,
  useUpdateUserMutation,
} = registrationApi;
