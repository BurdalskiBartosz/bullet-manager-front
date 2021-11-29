import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './date/dateSlice';

export default configureStore({
	reducer: {
		date: dateReducer
	}
});
