import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { dateFormat } from 'src/utils/dateFormat';

export const slice = createSlice({
	name: 'date',
	initialState: {
		value: dateFormat(new Date())
	},
	reducers: {
		changeDate: (state, action) => {
			state.value = action.payload;
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.date
			};
		}
	}
});

export const { changeDate } = slice.actions;

export const selectDate = (state) => state.date.value;

export default slice.reducer;
