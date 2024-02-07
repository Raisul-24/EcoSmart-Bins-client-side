import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { axiosPrivate } from "../../axios/axiosprivate";

export const getApi = createApi({
  reducerPath: "getApi",
  baseQuery: fetchBaseQuery({ baseUrl: axiosPrivate.defaults.baseURL }),
  endpoints: (builder) => ({
    getApi: builder.query({
      query: (query) => query,
    }),
  }),
});
export const { useGetApiQuery } = getApi;
export default getApi;
