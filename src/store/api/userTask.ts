import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { createApiDefaultConfig } from '../config/config';

type tGetUserTasksResponse = {
	id: number;
	title: string;
	plannedFinishDate: string;
	category?: string;
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
		addUserTask: builder.mutation({
			query: (body) => ({
				url: 'user-task',
				method: 'POST',
				body
			}),
			invalidatesTags: ['UserTask']
		})
	})
});

export const {
	useGetUserTasksQuery,
	useGetOneUserTaskQuery,
	useAddUserTaskMutation
} = userTaskApi;
