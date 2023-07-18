import { apiSlice } from "./apiSlices";
const USERS_URL = "/api/users";

export const scoresApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getScores: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/scores/`,
        method: "GET",
      }),
    }),
    createScore: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/scores/add`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetScoresMutation, useCreateScoreMutation } = scoresApiSlice;
