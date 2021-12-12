import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { config } from 'src/config/config';
import { getQuery } from 'src/utils/getQuery';

export const notesApi = createApi({
	reducerPath: 'notesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${config.baseUrl}`,
		credentials: 'include'
	}),
	tagTypes: ['Notes'],
	endpoints: (builder) => ({
		getNotes: builder.query({
			query: ({ where } = {}) => {
				const query = getQuery({ where });
				return `note/${query}`;
			},
			providesTags: ['Notes']
		}),
		addNote: builder.mutation({
			query: (body) => ({
				url: 'note',
				method: 'POST',
				body
			}),
			invalidatesTags: ['Notes']
		}),
		removeNote: builder.mutation({
			query: (body) => ({
				url: 'note',
				method: 'DELETE',
				body
			}),
			invalidatesTags: ['Notes']
		})
	})
});

export const { useGetNotesQuery, useAddNoteMutation, useRemoveNoteMutation } =
	notesApi;
