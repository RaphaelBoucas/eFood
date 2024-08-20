import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const restaurantsApi = createApi({
  reducerPath: 'restaurantsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurantsById: builder.query({
      query: () => 'restaurantes', //Checar depois
    }),
    getMenuInfo: builder.query({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetRestaurantsByIdQuery,
  useGetMenuInfoQuery,
  usePurchaseMutation,
} = restaurantsApi
