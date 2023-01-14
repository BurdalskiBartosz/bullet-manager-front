import { Controller } from 'react-hook-form';
import { FC } from 'react';
import {
	CalendarWrapper,
	StyledInput,
	StyledWrapper
} from './CalendarInput.style';
import { tInputBase } from 'components/atoms/InputBase/InputBase';
import DatePicker, { registerLocale } from 'react-datepicker';
import IconButton from 'components/atoms/IconButton';
import 'react-datepicker/dist/react-datepicker.css';
import SelectInput from '../SelectInput';
import pl from 'date-fns/locale/pl';
import Font from 'components/atoms/Font';
registerLocale('pl', pl);

type tProps = {
	control: any;
	inputBase: tInputBase;
};

const CalendarInput: FC<tProps> = ({ inputBase, control }) => {
	const year = new Date().getFullYear();

	const years = new Array(10).fill(null).map((el, i) => year + i);

	// const months = [
	// 	{ label: 'January', value: '1' },
	// 	{ label: 'February', value: '2' },
	// 	{ label: 'March', value: '3' },
	// 	{ label: 'April', value: '4' },
	// 	{ label: 'May', value: '5' },
	// 	{ label: 'June', value: '6' },
	// 	{ label: 'July', value: '7' },
	// 	{ label: 'August', value: '8' },
	// 	{ label: 'September', value: '9' },
	// 	{ label: 'October', value: '10' },
	// 	{ label: 'November', value: '11' },
	// 	{ label: 'December', value: '12' }
	// ];

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	return (
		<StyledWrapper
			fullWidth={inputBase.fullWidth}
			isError={inputBase.error?.isError}
		>
			{inputBase.label && (
				<Font htmlFor={inputBase.id} variant="label">
					{inputBase.label}
				</Font>
			)}
			<Controller
				name={inputBase.id}
				control={control}
				defaultValue={inputBase.value}
				render={({ field }) => {
					const { onChange, value } = field;
					return (
						<CalendarWrapper>
							<DatePicker
								showTimeInput
								shouldCloseOnSelect={false}
								locale="pl"
								selected={value}
								onChange={onChange}
								onMonthChange={onChange}
								onYearChange={onChange}
								customInput={<StyledInput />}
								disabledKeyboardNavigation
								timeInputLabel="Godzina:"
								dateFormat="dd/MM/yyyy, HH:mm"
								showMonthDropdown
								showYearDropdown
								renderCustomHeader={({
									date,
									changeYear,
									changeMonth,
									decreaseMonth,
									increaseMonth,
									prevMonthButtonDisabled,
									nextMonthButtonDisabled
								}) => (
									<div
										style={{
											margin: 10,
											display: 'flex',
											justifyContent: 'center',
											gap: '5px'
										}}
									>
										<IconButton
											iconName="navigate_before"
											fn={decreaseMonth}
											disabled={prevMonthButtonDisabled}
										/>

										<select
											value={new Date(date).getFullYear()}
											onChange={({ target }) =>
												changeYear(Number(target.value))
											}
										>
											{years.map((option) => (
												<option
													key={option}
													value={option}
												>
													{option}
												</option>
											))}
										</select>

										<select
											value={
												months[
													new Date(date).getMonth()
												]
											}
											onChange={({ target: { value } }) =>
												changeMonth(
													months.indexOf(value)
												)
											}
										>
											{months.map((option) => (
												<option
													key={option}
													value={option}
												>
													{option}
												</option>
											))}
										</select>

										<IconButton
											iconName="navigate_next"
											fn={increaseMonth}
											disabled={nextMonthButtonDisabled}
										/>
									</div>
								)}
							/>
						</CalendarWrapper>
					);
				}}
			/>
		</StyledWrapper>
	);
};

export default CalendarInput;
