import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { createApiDefaultConfig } from '../config/config';

export type tGetCategory = {
	id: string;
	name: string;
};

export const categoryApi = createApi({
	reducerPath: 'categoryApi',
	baseQuery: createApiDefaultConfig(),
	tagTypes: ['Category'],
	endpoints: (builder) => ({
		getCategories: builder.query<tGetCategory[], void>({
			query: () => {
				return `category`;
			},
			providesTags: ['Category']
		}),
		getOneCategory: builder.query<tGetCategory, void>({
			query: (id) => `category/${id}`,
			providesTags: ['Category']
		}),
		addCategory: builder.mutation({
			query: (body) => ({
				url: 'category',
				method: 'POST',
				body
			}),
			invalidatesTags: ['Category']
		})
	})
});

export const {
	useGetCategoriesQuery,
	useGetOneCategoryQuery,
	useAddCategoryMutation
} = categoryApi;
