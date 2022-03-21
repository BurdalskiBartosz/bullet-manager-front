import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { getQuery } from 'src/utils/getQuery';
import { createApiDefaultConfig } from '../config/config';

export const notesApi = createApi({
	reducerPath: 'notesApi',
	baseQuery: createApiDefaultConfig(),
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
		updateNote: builder.mutation({
			query: (body) => ({
				url: `note/${body.id}`,
				method: 'PUT',
				body
			}),
			invalidatesTags: ['Notes']
		}),
		removeNote: builder.mutation({
			query: (id) => ({
				url: `note/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Notes']
		})
	})
});

export const {
	useGetNotesQuery,
	useAddNoteMutation,
	useRemoveNoteMutation,
	useUpdateNoteMutation
} = notesApi;
