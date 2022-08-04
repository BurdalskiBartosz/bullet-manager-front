import { Controller } from 'react-hook-form';
import { FC } from 'react';
import { CalendarWrapper, StyledInput } from './CalendarInput.style';
import { tInputBase } from 'components/atoms/InputBase/InputBase';
import DatePicker from 'react-datepicker';
import IconButton from 'components/atoms/IconButton';
import 'react-datepicker/dist/react-datepicker.css';

type tProps = {
	control: any;
	refParent: any;
	inputBase: tInputBase;
};

const CalendarInput: FC<tProps> = ({ inputBase, control }) => {
	const years = new Array(10)
		.fill(null)
		.map((el, i) => new Date().getFullYear() + i);
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
		<>
			<Controller
				name={inputBase.id}
				control={control}
				defaultValue={inputBase.value}
				render={({ field }) => {
					const { onChange, value } = field;
					return (
						<CalendarWrapper>
							<DatePicker
								selected={value}
								onChange={onChange}
								customInput={<StyledInput />}
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
											justifyContent: 'center'
										}}
									>
										<IconButton
											iconName="navigate_before"
											fn={decreaseMonth}
											disabled={prevMonthButtonDisabled}
										/>
										<select
											value={new Date(date).getFullYear()}
											onChange={({ target: { value } }) =>
												changeYear(+value)
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
		</>
	);
};

export default CalendarInput;
