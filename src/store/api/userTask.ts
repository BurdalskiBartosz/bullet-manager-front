import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { createApiDefaultConfig } from '../config/config';

export type tGetUserTasksResponse = {
	id: number;
	title: string;
	plannedFinishDate: string;
	description: string;
	priority: string;
	categories?: {
		id: number;
		name: string;
	}[];
	isDone: boolean;
};

export type tGetUserTasksGroupedByDateResponse = [
	string,
	tGetUserTasksResponse[]
];

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
		getGroupedByDateTasks: builder.query<
			tGetUserTasksGroupedByDateResponse[],
			void
		>({
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
		editUserTask: builder.mutation({
			query: ({ id, body }) => ({
				url: `user-task/${id}`,
				method: 'PATCH',
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
	useEditUserTaskMutation,
	useDeleteUserTaskMutation
} = userTaskApi;
