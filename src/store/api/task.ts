import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { createApiDefaultConfig } from '../config/config';

export const tasksApi = createApi({
	reducerPath: 'tasksApi',
	baseQuery: createApiDefaultConfig(),
	tagTypes: ['Tasks'],
	endpoints: (builder) => ({
		getTasks: builder.query<void, void>({
			query: () => {
				return `task`;
			},
			providesTags: ['Tasks']
		}),
		getOneTasks: builder.query({
			query: (id) => `task/${id}`,
			providesTags: ['Tasks']
		}),
		addTask: builder.mutation({
			query: (body) => ({
				url: 'task',
				method: 'POST',
				body
			}),
			invalidatesTags: ['Tasks']
		})
	})
});

export const { useGetTasksQuery, useGetOneTasksQuery, useAddTaskMutation } =
	tasksApi;
