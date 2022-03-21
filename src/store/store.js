import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './state/date/dateSlice';
import { createWrapper } from 'next-redux-wrapper';
import { tasksApi } from './api/tasks';
import { notesApi } from './api/notes';
import { booksApi } from './api/books';

const arr = [tasksApi.middleware, notesApi.middleware, booksApi.middleware];
const makeStore = () => {
	return configureStore({
		reducer: {
			date: dateReducer,
			[tasksApi.reducerPath]: tasksApi.reducer,
			[notesApi.reducerPath]: notesApi.reducer,
			[booksApi.reducerPath]: booksApi.reducer
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(...arr),
		devTools: true
	});
};

export const wrapper = createWrapper(makeStore);
