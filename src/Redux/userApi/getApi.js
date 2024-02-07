import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { axiosPrivate } from "../../axios/axiosprivate";
const token = localStorage.getItem("access-token");
export const getApi = createApi({
  reducerPath: "getApi",
  baseQuery: fetchBaseQuery({
    baseUrl: axiosPrivate.defaults.baseURL,
    headers: {
      authorization: `Bearer ${token}`,
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getApi: builder.query({
      query: (url) => {
        return { url: url, credentials: "include" };
      },
    }),
  }),
});
export const { useGetApiQuery } = getApi;
export default getApi;
