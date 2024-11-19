import { GENRE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const genreApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createGenre: builder.mutation({
      query: (newGenre) => ({
        url: `${GENRE_URL}`,
        method: "POST",
        body: newGenre,
      }),
    }),

    updateGenre: builder.mutation({
      query: ({ id, updateGenre }) => ({
        url: `${GENRE_URL}/${id}`,
        method: "PUT",
        body: updateGenre,
      }),
    }),

    deleteGenre: builder.mutation({
      query: (id) => ({
        url: `${GENRE_URL}/${id}`,
        method: "DELETE",
      }),
    }),

    fetchGenre: builder.query({
      query: () => `${GENRE_URL}/gener`,
    }),
  }),
});

export const {
  useCreateGenreMutation,
  useUpdateGenreMutation,
  useDeleteGenreMutation,
  useFetchGenreQuery,
} = genreApiSlice;