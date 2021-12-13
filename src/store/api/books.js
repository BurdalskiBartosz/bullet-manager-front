import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { getQuery } from 'src/utils/getQuery';
import { createApiDefaultConfig } from '../config/config';

export const booksApi = createApi({
	reducerPath: 'booksApi',
	baseQuery: createApiDefaultConfig(),
	tagTypes: ['Books'],
	endpoints: (builder) => ({
		getBooks: builder.query({
			query: ({ where } = {}) => {
				const query = getQuery({ where });
				return `books/${query}`;
			},
			providesTags: ['Books']
		}),
		addBook: builder.mutation({
			query: (body) => ({
				url: 'books',
				method: 'POST',
				body
			}),
			invalidatesTags: ['Books']
		}),
		removeBook: builder.mutation({
			query: (body) => ({
				url: 'books',
				method: 'DELETE',
				body
			}),
			invalidatesTags: ['Books']
		})
	})
});

export const { useGetBooksQuery, useAddBookMutation, useRemoveBookMutation } =
	booksApi;
