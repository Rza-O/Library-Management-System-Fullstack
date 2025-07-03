import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
	tagTypes: ["books"],
	endpoints: (build) => ({
		getBooks: build.query({
			query: () => "/books",
			providesTags: ["books"],
		}),
		getSingleBook: build.query({
			query: (id: string) => `/books/${id}`,
		}),
	}),
});

export const { useGetBooksQuery, useGetSingleBookQuery } = baseApi;
