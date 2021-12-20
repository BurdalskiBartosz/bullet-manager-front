import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { getQuery } from 'src/utils/getQuery';
import { createApiDefaultConfig } from '../config/config';

export const tasksApi = createApi({
	reducerPath: 'tasksApi',
	baseQuery: createApiDefaultConfig(),
	tagTypes: ['Tasks'],
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: ({ where } = {}) => {
				const query = getQuery({ where });
				return `task/${query}`;
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
		}),
		updateTask: builder.mutation({
			query: (body) => ({
				url: `task/${body.id}`,
				method: 'PUT',
				body
			}),
			invalidatesTags: ['Tasks']
		}),
		removeTask: builder.mutation({
			query: (body) => ({
				url: `task/${body.id}`,
				method: 'DELETE',
				body
			}),
			invalidatesTags: ['Tasks']
		})
	})
});

export const {
	useGetTasksQuery,
	useGetOneTasksQuery,
	useAddTaskMutation,
	useRemoveTaskMutation,
	useUpdateTaskMutation
} = tasksApi;
