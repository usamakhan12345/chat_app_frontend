import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { chatConstants } from "../../constants/index.jsx";

export const LoginRequest = createApi({
  reducerPath: "authUser",
  baseQuery: fetchBaseQuery({ baseUrl: chatConstants.baseUrl }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "api/alluser",
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "api/login",
        method: "post",
        body: data,
      }),
    }),
  }),
});
export const { useUserLoginMutation, useGetAllUsersQuery } = LoginRequest;
