import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Controller } from 'react-hook-form';

import Font from 'components/atoms/Font';
import { FC, Ref } from 'react';
import { StyledWrapper } from './CalendarInput.style';
import Modal from 'components/molecules/Modal';
import useModal from 'hooks/useModal';

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

	return (
		<StyledWrapper isError={error.isError}>
			<Font htmlFor={id} variant="label">
				{label}
			</Font>
			<div>
				<button type="button" onClick={handleOpenModal}>
					OPEN
				</button>
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
									<Calendar
										onChange={onChange}
										value={value}
									/>
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
