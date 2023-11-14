import { apiClient } from 'lib/apiClient/apiClient';
import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { apiSlice } from '../api';
import { PathRequest } from '../path-request.enum';
import { ViewCardInfo } from '@/components/userViewCard/interfaces/types';
import { ReviewType } from '@/components/reviews/interfaces/ReviewType';

import { UserWithProfiles } from './dto/get-user-profile.response';
import { GetVerifyCodeMobileNumberDto } from './dto/get-verify-code-mobile-number.dto';
import { GetVerifyCodeMobileNumberResponse } from './dto/get-verify-code-mobile-number.response';
import { ProfileReviewDto } from './dto/profile-review.dto';
import { ChildrenReviewDto } from './dto/children-review.dto';
import { ChooseProfileResponseDto } from './dto/choose-profile.response';

export const profileApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    usersProfile: build.mutation<UserWithProfiles[] | string | unknown, void>({
      async queryFn() {
        const response = (await apiClient.get<UserWithProfiles>(
          PathRequest.GetUserProfile,
        )) as QueryReturnValue<
          unknown,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        >;

        if (!('error' in response)) {
          return { data: response };
        }
        return { error: response.error };
      },
    }),
    chooseProfile: build.mutation<
      ChooseProfileResponseDto | string | unknown,
      string
    >({
      async queryFn(payload: string) {
        const response = (await apiClient.get<ChooseProfileResponseDto>(
          `${PathRequest.ChooseProfile}/${payload}`,
        )) as QueryReturnValue<
          unknown,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        >;

        if (!('error' in response)) {
          return { data: response };
        }
        return { error: response.error };
      },
    }),
    addProfileReview: build.mutation<ReviewType[] | unknown, ProfileReviewDto>({
      async queryFn(payload: ProfileReviewDto) {
        const response = (await apiClient.post<ReviewType[]>(
          PathRequest.AddProfileReview,
          payload,
        )) as QueryReturnValue<
          unknown,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        >;

        if (!('error' in response)) {
          return { data: response.data };
        }
        return { error: response.error };
      },
    }),
    addChildrenReview: build.mutation<
      ReviewType | string | unknown,
      ChildrenReviewDto
    >({
      async queryFn(payload: ChildrenReviewDto) {
        const response = (await apiClient.post<ReviewType>(
          PathRequest.AddChildrenReview,
          payload,
        )) as QueryReturnValue<
          unknown,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        >;

        if (!('error' in response)) {
          return { data: response.data };
        }
        return { error: response.error };
      },
    }),
    getReviewsByRecipient: build.mutation<
      ReviewType[] | string | unknown,
      void
    >({
      async queryFn() {
        const response = (await apiClient.get<ReviewType[]>(
          PathRequest.GetReviewByRecipient,
        )) as QueryReturnValue<
          unknown,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        >;

        if (!('error' in response)) {
          return { data: response.data };
        }
        return { error: response.error };
      },
    }),
    getReviewsByAuthor: build.mutation<ReviewType[] | string | unknown, void>({
      async queryFn() {
        const response = (await apiClient.get<ReviewType[]>(
          PathRequest.GetReviewByAuthor,
        )) as QueryReturnValue<
          unknown,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        >;

        if (!('error' in response)) {
          return { data: response.data };
        }
        return { error: response.error };
      },
    }),
    getReviewsForProfileCard: build.mutation<ReviewType[] | unknown, string>({
      async queryFn(payload: string) {
        const response = (await apiClient.get<ReviewType[]>(
          `${PathRequest.GetReviewForProfileCard}/${payload}`,
        )) as QueryReturnValue<
          ReviewType[],
          FetchBaseQueryError,
          FetchBaseQueryMeta
        >;

        if (!('error' in response)) {
          return { data: response.data };
        }
        return { error: response.error };
      },
    }),
    getProfileCard: build.mutation<ViewCardInfo | string | unknown, string>({
      async queryFn(payload: string) {
        const response = (await apiClient.get<ReviewType[]>(
          `${PathRequest.GetProfileCard}/${payload}`,
        )) as QueryReturnValue<
          ViewCardInfo,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        >;

        if (!('error' in response)) {
          return { data: response.data };
        }

        return { error: response.error };
      },
    }),
    getVerifyCodeMobileNumber: build.mutation<
      GetVerifyCodeMobileNumberResponse | string | unknown,
      GetVerifyCodeMobileNumberDto
    >({
      async queryFn(payload: GetVerifyCodeMobileNumberDto) {
        const response =
          (await apiClient.post<GetVerifyCodeMobileNumberResponse>(
            PathRequest.GetVerifyCodeMobileNumber,
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
    createProfile: build.mutation<void | unknown, FormData>({
      async queryFn(payload: FormData) {
        const response = await apiClient.postFormData<void>(
          PathRequest.CreateProfile,
          payload,
          {
            formData: true,
          },
        );

        return { data: response };
      },
    }),
  }),
});

export const {
  useChooseProfileMutation,
  useUsersProfileMutation,
  useGetVerifyCodeMobileNumberMutation,
  useCreateProfileMutation,
  useAddProfileReviewMutation,
  useAddChildrenReviewMutation,
  useGetReviewsByAuthorMutation,
  useGetReviewsByRecipientMutation,
  useGetProfileCardMutation,
  useGetReviewsForProfileCardMutation,
} = profileApi;
