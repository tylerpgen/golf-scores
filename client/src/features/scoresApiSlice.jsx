import { apiSlice } from "./apiSlices";

// Define the base URL for the users' API
const USERS_URL = "/api/users";

// Use the 'injectEndpoints' method of 'apiSlice' to create API endpoints
export const scoresApiSlice = apiSlice.injectEndpoints({
  // Define the endpoints object with mutation functions
  endpoints: (builder) => ({
    // Mutation function to get scores
    getScores: builder.mutation({
      // Define the query function to fetch scores
      query: () => ({
        url: `${USERS_URL}/scores/`, // URL to the 'getScores' endpoint
        method: "GET", // HTTP GET method
      }),
    }),

    // Mutation function to create a new score
    createScore: builder.mutation({
      // Define the query function to send the data for creating a score
      query: (data) => ({
        url: `${USERS_URL}/scores/add`, // URL to the 'createScore' endpoint
        method: "POST", // HTTP POST method
        body: data, // Data to be sent in the request body
      }),
    }),

    // Mutation function to delete a score
    deleteScore: builder.mutation({
      // Define the query function to delete a score by its ID
      query: (scoreId) => ({
        url: `${USERS_URL}/scores/${scoreId}`, // URL to the 'deleteScore' endpoint with the score ID as a parameter
        method: "DELETE", // HTTP DELETE method
      }),
    }),
  }),
});

// Export individual hooks for using the mutations
export const { useGetScoresMutation, useCreateScoreMutation, useDeleteScoreMutation } = scoresApiSlice;
