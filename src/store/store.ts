import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './api';
import { tasksApi } from './api/task';

const middlewares = [tasksApi.middleware];

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middlewares)
});

export default store;
