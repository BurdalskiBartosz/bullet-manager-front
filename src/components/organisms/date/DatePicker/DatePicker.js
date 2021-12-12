import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import { TextField } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { changeDate, selectDate } from 'src/store/date/dateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { dateFormat } from 'src/utils/dateFormat';

const DatePicker = () => {
	const checkedDate = useSelector(selectDate);
	const dispatch = useDispatch();

	const handleChange = (newValue) => {
		const formattedDate = dateFormat(newValue);

		dispatch(changeDate(formattedDate));
	};
	return (
		<LocalizationProvider dateAdapter={DateAdapter}>
			<DesktopDatePicker
				label="Wybrana data"
				inputFormat="MM/dd/yyyy"
				value={checkedDate}
				onChange={handleChange}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
};

export default DatePicker;
