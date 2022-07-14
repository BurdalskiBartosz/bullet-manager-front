import Calendar from 'react-calendar';
import { Controller } from 'react-hook-form';

import Font from 'components/atoms/Font';
import { FC, useState } from 'react';
import { StyledWrapper, CalendarWrapper } from './CalendarInput.style';
import Modal from 'components/molecules/Modal';
import useModal from 'hooks/useModal';
import Icon from 'components/atoms/Icon';
import { format } from 'date-fns';
import Input from 'components/atoms/Input';

type tProps = {
	id: string;
	label: string;
	control: any;
	refParent?: {
		current: HTMLElement;
	};
	error: {
		isError: boolean;
		errorMessage: string;
	};
};

const CalendarInput: FC<tProps> = ({
	id,
	label,
	control,
	error,
	refParent
}) => {
	const { handleCloseModal, handleOpenModal, isOpen } = useModal();
	const [date, setDate] = useState<Date>(new Date());

	return (
		<StyledWrapper isError={error.isError}>
			<div>
				<Input
					id={id}
					label={label}
					isDisabled
					fullWidth={false}
					value={format(date, 'MM/dd/yy')}
					customIcon={{
						iconName: 'calendar',
						fn: handleOpenModal
					}}
				/>
				{isOpen ? (
					<Modal
						header="Dodaj zadanie"
						handleClose={handleCloseModal}
						customParent={refParent?.current}
					>
						<Controller
							name={id}
							control={control}
							render={({ field }) => {
								const { onChange, value } = field;
								return (
									<CalendarWrapper>
										<Calendar
											minDetail="year"
											onChange={(value: Date) => {
												setDate(value);
												onChange(value);
											}}
											value={value}
											nextLabel={
												<Icon iconName="navigate_next" />
											}
											next2Label={
												<Icon iconName="double_navigate_next" />
											}
											prevLabel={
												<Icon iconName="navigate_before" />
											}
											prev2Label={
												<Icon iconName="double_navigate_before" />
											}
										/>
									</CalendarWrapper>
								);
							}}
						/>
					</Modal>
				) : null}
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
