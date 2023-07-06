import { apiSlice } from "./apiSlices";
const USERS_URL = "/api/users";

// Set up the usersApiSlice
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      // Define the login mutation
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

// Extract the useLoginMutation from the usersApiSlice
export const { useLoginMutation, useLogoutMutation } = usersApiSlice;
