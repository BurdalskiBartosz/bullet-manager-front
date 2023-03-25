import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { createApiDefaultConfig } from '../config/config';

export type tGetUserTasksResponse = {
	id: number;
	title: string;
	plannedFinishDate: string;
	description: string;
	priority: string;
	category?: {
		id: number;
		name: string;
	};
};

export const userTaskApi = createApi({
	reducerPath: 'userTaskApi',
	baseQuery: createApiDefaultConfig(),
	tagTypes: ['UserTask'],
	endpoints: (builder) => ({
		getUserTasks: builder.query<tGetUserTasksResponse[], void>({
			query: () => {
				return `user-task`;
			},
			providesTags: ['UserTask']
		}),
		getOneUserTask: builder.query<tGetUserTasksResponse, void>({
			query: (id) => `user-task/${id}`,
			providesTags: ['UserTask']
		}),
		getGroupedByDateTasks: builder.query<any, void>({
			query: () => `user-task/grouped-by-date`,
			providesTags: ['UserTask']
		}),
		addUserTask: builder.mutation({
			query: (body) => ({
				url: 'user-task',
				method: 'POST',
				body
			}),
			invalidatesTags: ['UserTask']
		}),
		deleteUserTask: builder.mutation({
			query: (id) => ({
				url: `user-task/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['UserTask']
		})
	})
});

export const {
	useGetUserTasksQuery,
	useGetOneUserTaskQuery,
	useGetGroupedByDateTasksQuery,
	useAddUserTaskMutation,
	useDeleteUserTaskMutation
} = userTaskApi;
