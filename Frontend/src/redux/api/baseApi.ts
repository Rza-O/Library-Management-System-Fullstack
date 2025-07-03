import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://libraboxlmsserver.vercel.app/api" }),
	tagTypes: ["books", "book", "borrow"],
	endpoints: (build) => ({
		getBooks: build.query({
			query: ({ page = 1, limit = 10 }) => `/books?page=${page}&limit=${limit}`,
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
		addBook: build.mutation({
			query: (data) => ({
				method: "POST",
				url: "/books",
				body: data,
			}),
			invalidatesTags: ["books"],
		}),
		borrowBook: build.mutation({
			query: (data) => ({
				method: "POST",
				url: "/borrow",
				body: data,
			}),
			invalidatesTags: ["books", "borrow"],
		}),
		getSummary: build.query({
			query: () => "/borrow",
			providesTags: ["borrow"],
		}),
	}),
});

export const {
	useGetBooksQuery,
	useGetSingleBookQuery,
	useDeleteBookMutation,
	useUpdateBookMutation,
	useAddBookMutation,
	useBorrowBookMutation,
	useGetSummaryQuery,
} = baseApi;
