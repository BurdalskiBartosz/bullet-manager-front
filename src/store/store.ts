import {
	combineReducers,
	configureStore,
	PreloadedState
} from '@reduxjs/toolkit';
import { categoryApi } from './api/category';
import { userTaskApi } from './api/userTask';

const middlewares = [userTaskApi.middleware, categoryApi.middleware];

export const rootReducer = combineReducers({
	[userTaskApi.reducerPath]: userTaskApi.reducer,
	[categoryApi.reducerPath]: categoryApi.reducer
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
