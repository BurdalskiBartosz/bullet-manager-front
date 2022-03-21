import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { createApiDefaultConfig } from '../config/config';

export const booksApi = createApi({
	reducerPath: 'booksApi',
	baseQuery: createApiDefaultConfig(),
	tagTypes: ['Books'],
	endpoints: (builder) => ({
		getBooks: builder.query({
			query: () => `book`,
			providesTags: ['Books']
		}),
		addBook: builder.mutation({
			query: (body) => ({
				url: 'book',
				method: 'POST',
				body
			}),
			invalidatesTags: ['Books']
		}),
		removeBook: builder.mutation({
			query: (id) => ({
				url: `book/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Books']
		}),
		updateBook: builder.mutation({
			query: (body) => ({
				url: `book/${body.id}`,
				method: 'PUT',
				body
			}),
			invalidatesTags: ['Books']
		})
	})
});

export const {
	useGetBooksQuery,
	useAddBookMutation,
	useUpdateBookMutation,
	useRemoveBookMutation
} = booksApi;
