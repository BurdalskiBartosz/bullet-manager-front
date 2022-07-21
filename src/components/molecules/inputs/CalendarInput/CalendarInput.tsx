import Calendar from 'react-calendar';
import { Controller } from 'react-hook-form';

import Font from 'components/atoms/Font';
import { FC, useState } from 'react';
import { StyledWrapper, CalendarWrapper } from './CalendarInput.style';
import Modal from 'components/molecules/Modal';
import useModal from 'hooks/useModal';
import Icon from 'components/atoms/Icon';
import { format } from 'date-fns';
import { tInputBase } from 'components/atoms/InputBase/InputBase';
import MaskInput from '../MaskInput';
import { dateMask } from 'utils/masks';

type tProps = {
	control: any;
	refParent: any;
	inputBase: tInputBase;
};

const CalendarInput: FC<tProps> = ({ inputBase, control, refParent }) => {
	const { handleCloseModal, handleOpenModal, isOpen } = useModal();
	const [date, setDate] = useState<Date>(new Date());

	return (
		<>
			<MaskInput
				mask={dateMask}
				placeholder="DD/MM/YYYY"
				control={control}
				inputBase={{
					id: 'title',
					label: 'SELECT',
					error: inputBase.error,
					value: format(date, 'MM/dd/yyyy'),
					icon: {
						iconName: 'calendar',
						fn: handleOpenModal
					}
				}}
			/>
			{isOpen ? (
				<Modal
					header="Dodaj zadanie"
					handleClose={handleCloseModal}
					customParent={refParent?.current}
				>
					<Controller
						name={inputBase.id}
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
		</>
	);
};

export default CalendarInput;
