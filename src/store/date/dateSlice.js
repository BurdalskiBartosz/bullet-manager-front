import { createSlice } from '@reduxjs/toolkit';
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
	}
});

export const { changeDate } = slice.actions;

export const selectDate = (state) => state.date.value;

export default slice.reducer;
