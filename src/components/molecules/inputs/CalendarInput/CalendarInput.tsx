import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Controller } from 'react-hook-form';
import { FC } from 'react';
import InputBase from 'components/atoms/InputBase';
import { tInputBase } from 'components/atoms/InputBase/InputBase';

type tProps = {
	control: any;
	inputBase: tInputBase;
};

const CalendarInput: FC<tProps> = ({ inputBase, control }) => {
	return (
		<InputBase {...inputBase}>
			<div>
				<Controller
					name={inputBase.id}
					control={control}
					render={({ field }) => {
						const { onChange, value } = field;
						return <Calendar onChange={onChange} value={value} />;
					}}
				/>
			</div>
		</InputBase>
	);
};

export default CalendarInput;
