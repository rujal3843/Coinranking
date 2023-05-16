import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'a8807e4d0fmsh8a066822a1e0a56p1e764djsn206c8c27496b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }, }),
  endpoints: (builder) => ({

    getCoins: builder.query({
      query: () => '/coins',
    }),

    getDetail: builder.query({
      query: (id) => `/coin/${id}`,
    }),

    
  }),

})


export const { useGetCoinsQuery, useGetDetailQuery } = cryptoApi
     
    