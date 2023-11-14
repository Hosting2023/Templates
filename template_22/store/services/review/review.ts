import { apiClient } from 'lib/apiClient/apiClient';

import { apiSlice } from '../api';
import { PathRequest } from '../path-request.enum';

import { ReviewDto } from './dto/review.dto';
import { ReviewDtoResponse } from './dto/review.dto.response';

export const blackListApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addReview: build.mutation<
      ReviewDtoResponse[] | string | unknown,
      ReviewDto
    >({
      async queryFn(payload: ReviewDto) {
        const response = await apiClient.patch<ReviewDtoResponse[]>(
          PathRequest.Order,
          payload,
        );
        return { data: response };
      },
    }),
  }),
});

export const { useAddReviewMutation } = blackListApi;
