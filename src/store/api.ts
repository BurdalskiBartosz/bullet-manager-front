import { combineReducers } from '@reduxjs/toolkit';
import { tasksApi } from './api/task';

export const rootReducer = combineReducers({
	[tasksApi.reducerPath]: tasksApi.reducer
});
export type tRootState = ReturnType<typeof rootReducer>;
