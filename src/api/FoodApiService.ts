import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {FoodDataApiResponseType} from '../data/remote/foodData/FoodDataApiResponseType';

/**
 * Main food api service (acts as client)
 * also, it contains the base url and all the endpoints in different functions
 */
export const foodApi = createApi({
  reducerPath: 'foodApi',

  // Base API URL
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hashtagloyalty.s3.ap-southeast-1.amazonaws.com',
  }),

  // End Points
  endpoints: builder => ({
    // Get Food List
    getFoodList: builder.query<FoodDataApiResponseType, {}>({
      query: ({}) => {
        return {
          url: `/Take+Home+Assignment+-+Thrive.json`,
        };
      },
    }),
  }),
});

export const {useGetFoodListQuery} = foodApi;
