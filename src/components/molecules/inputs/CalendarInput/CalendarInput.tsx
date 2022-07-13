import Calendar from 'react-calendar';
import { Controller } from 'react-hook-form';

import Font from 'components/atoms/Font';
import { FC } from 'react';
import { StyledWrapper, CalendarWrapper } from './CalendarInput.style';
import Modal from 'components/molecules/Modal';
import useModal from 'hooks/useModal';
import Icon from 'components/atoms/Icon';

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
									<CalendarWrapper>
										<Calendar
											onChange={onChange}
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
