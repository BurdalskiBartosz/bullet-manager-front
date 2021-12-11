import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { config } from 'src/config/config';
import { getQuery } from 'src/utils/getQuery';

export const tasksApi = createApi({
	reducerPath: 'tasksApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${config.baseUrl}`,
		credentials: 'include'
	}),
	tagTypes: ['Tasks'],
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: ({ where } = {}) => {
				const query = getQuery({ where });
				return `task/${query}`;
			},
			providesTags: ['Tasks']
		}),
		addTask: builder.mutation({
			query: (body) => ({
				url: 'task',
				method: 'POST',
				body
			}),
			invalidatesTags: ['Tasks']
		}),
		removeTask: builder.mutation({
			query: (body) => ({
				url: 'tasks',
				method: 'DELETE',
				body
			}),
			invalidatesTags: ['Tasks']
		})
	})
});

export const { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation } =
	tasksApi;
