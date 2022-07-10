import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Controller } from 'react-hook-form';

import Font from 'components/atoms/Font';
import { FC } from 'react';
import { StyledWrapper } from './CalendarInput.style';

type tProps = {
	id: string;
	label: string;
	control: any;
	error: {
		isError: boolean;
		errorMessage: string;
	};
};

const CalendarInput: FC<tProps> = ({ id, label, control, error }) => {
	return (
		<StyledWrapper isError={error.isError}>
			<Font htmlFor={id} variant="label">
				{label}
			</Font>
			<div>
				<Controller
					name={id}
					control={control}
					render={({ field }) => {
						const { onChange, value } = field;
						return <Calendar onChange={onChange} value={value} />;
					}}
				/>
			</div>
			<Font
				variant="inputError"
				style={{ alignSelf: 'flex-end', height: '10px' }}
			>
				{error.isError ? error.errorMessage : ''}
			</Font>
		</StyledWrapper>
	);
};

export default CalendarInput;
