import { Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Button from 'src/components/atoms/Button';
import TaskForm from 'src/components/organisms/forms/TaskForm/TaskForm';
import Modal from 'src/components/organisms/Modal';
import useModal from 'src/hooks/useModal';
import LoggedUserTemplate from 'src/templates/LoggedUserTemplate/LoggedUserTemplate';
import { useGetTasksQuery, useAddTaskMutation } from 'src/store/api/tasks';
import KanbanWrapper from 'src/components/organisms/kanban/KanbanWrapper/KanbanWrapper';
import { dateFormat } from 'src/utils/dateFormat';
import { v4 as uuid } from 'uuid';

const Kanban = ({ selectedDate }) => {
	const tasks = useGetTasksQuery({ where: { date: dateFormat(new Date()) } });
	const [addTask] = useAddTaskMutation();
	const { isOpen, handleCloseModal, handleOpenModal } = useModal(false);
	const columnsFromBackend = {
		[uuid()]: {
			name: 'Do zrobienia',
			items: tasks.data
		},
		[uuid()]: {
			name: 'W trakcie',
			items: []
		},
		[uuid()]: {
			name: 'Zrobione',
			items: []
		}
	};

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm();

	const handleAddTask = (data) => {
		const taskData = { ...data, date: selectedDate };
		handleCloseModal();
		addTask(taskData);
	};

	return (
		<LoggedUserTemplate>
			<Modal isOpen={isOpen} handleClose={handleCloseModal}>
				<TaskForm
					handleSubmit={() => handleSubmit(handleAddTask)}
					errors={errors}
					control={control}
				/>
			</Modal>
			<Stack
				direction="row"
				alignItems="flex-start"
				justifyContent="space-between"
			>
				<Typography variant="h1">Kanban na dzisiaj</Typography>
				<Button onClick={() => handleOpenModal()} variant="outlined">
					Dodaj zadanie
				</Button>
			</Stack>

			{tasks.data?.length && (
				<KanbanWrapper columnsFromBackend={columnsFromBackend} />
			)}
		</LoggedUserTemplate>
	);
};
// export const getServerSideProps = async ({ query }) => {
// 	const itemsFromBackend = [
// 		{ id: uuid(), content: 'First task' },
// 		{ id: uuid(), content: 'Second task' },
// 		{ id: uuid(), content: 'Third task' },
// 		{ id: uuid(), content: 'Fourth task' },
// 		{ id: uuid(), content: 'Fifth task' }
// 	];

// 	return { props: { columnsFromBackend } };
// };
export default Kanban;
