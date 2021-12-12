import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './date/dateSlice';
import { createWrapper } from 'next-redux-wrapper';
import { tasksApi } from './api/tasks';

const makeStore = () => {
	return configureStore({
		reducer: {
			date: dateReducer,
			[tasksApi.reducerPath]: tasksApi.reducer
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(tasksApi.middleware),
		devTools: true
	});
};

export const wrapper = createWrapper(makeStore);
