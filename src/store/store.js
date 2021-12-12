import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './date/dateSlice';
import { createWrapper } from 'next-redux-wrapper';
import { tasksApi } from './api/tasks';
import { notesApi } from './api/notes';

const makeStore = () => {
	return configureStore({
		reducer: {
			date: dateReducer,
			[tasksApi.reducerPath]: tasksApi.reducer,
			[notesApi.reducerPath]: notesApi.reducer
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.concat(tasksApi.middleware)
				.concat(notesApi.middleware),
		devTools: true
	});
};

export const wrapper = createWrapper(makeStore);
