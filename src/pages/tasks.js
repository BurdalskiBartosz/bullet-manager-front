import { Grid, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Button from 'src/components/atoms/Button';
import TaskCard from 'src/components/molecules/cards/TaskCard/TaskCard';
import TaskForm from 'src/components/organisms/forms/TaskForm/TaskForm';
import Modal from 'src/components/organisms/Modal';
import useModal from 'src/hooks/useModal';
import LoggedUserTemplate from 'src/templates/LoggedUserTemplate/LoggedUserTemplate';
import { useGetTasksQuery, useAddTaskMutation } from 'src/store/api/tasks';

const Tasks = ({ selectedDate }) => {
	const tasks = useGetTasksQuery({ where: { date: selectedDate } });
	const [addTask] = useAddTaskMutation();

	const { isOpen, handleCloseModal, handleOpenModal } = useModal(false);
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
				<Typography variant="h1">Zadania</Typography>
				<Button onClick={() => handleOpenModal()} variant="outlined">
					Dodaj zadanie
				</Button>
			</Stack>
			<Grid container spacing={3}>
				{tasks.data &&
					tasks.data.map((task) => (
						<Grid item key={task.id}>
							<TaskCard task={task} />
						</Grid>
					))}
			</Grid>
		</LoggedUserTemplate>
	);
};

export default Tasks;
