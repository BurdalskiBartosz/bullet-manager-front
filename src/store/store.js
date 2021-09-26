import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@f/features/counter/counterSlice';

export default configureStore({
	reducer: {
		counter: counterReducer
	}
});
