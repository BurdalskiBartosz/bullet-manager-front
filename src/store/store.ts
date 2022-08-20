import {
	combineReducers,
	configureStore,
	PreloadedState
} from '@reduxjs/toolkit';
import { tasksApi } from './api/task';

const middlewares = [tasksApi.middleware];

export const rootReducer = combineReducers({
	[tasksApi.reducerPath]: tasksApi.reducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(middlewares)
	});
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
