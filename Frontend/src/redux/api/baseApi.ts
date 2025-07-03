import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
	tagTypes: ["books", "book"],
	endpoints: (build) => ({
		getBooks: build.query({
			query: () => "/books",
			providesTags: ["books"],
		}),
		getSingleBook: build.query({
			query: (id: string) => `/books/${id}`,
			providesTags: ["book"],
		}),
		deleteBook: build.mutation({
			query: (id: string) => ({
				method: "DELETE",
				url: `/books/${id}`,
			}),
			invalidatesTags: ["books"],
		}),
		updateBook: build.mutation({
			query: ({ id, data }) => ({
				method: "PUT",
				url: `/books/${id}`,
				body: data,
			}),
			invalidatesTags: ["book", "books"],
		}),
	}),
});

export const { useGetBooksQuery, useGetSingleBookQuery, useDeleteBookMutation, useUpdateBookMutation } = baseApi;
