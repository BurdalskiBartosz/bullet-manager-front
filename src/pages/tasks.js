import { Grid, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'src/components/atoms/Button';
import TaskCard from 'src/components/molecules/cards/TaskCard/TaskCard';
import TaskForm from 'src/components/organisms/forms/TaskForm/TaskForm';
import Modal from 'src/components/organisms/Modal';
import useModal from 'src/hooks/useModal';
import taskService from 'src/services/TaskService';
import LoggedUserTemplate from 'src/templates/LoggedUserTemplate/LoggedUserTemplate';

const Tasks = ({ tasks }) => {
	const { isOpen, handleCloseModal, handleOpenModal } = useModal(false);
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm();

	const addTask = (data) => {
		console.log(data);
		handleCloseModal();
		taskService.createTask(data);
		taskService.getTasks();
	};
	useEffect(() => {
		console.log(tasks);
	});
	return (
		<LoggedUserTemplate>
			<Modal isOpen={isOpen} handleClose={handleCloseModal}>
				<TaskForm
					handleSubmit={() => handleSubmit(addTask)}
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
				{tasks.length &&
					tasks.map((task) => (
						<Grid item key={task.id}>
							<TaskCard task={task} />
						</Grid>
					))}
			</Grid>
		</LoggedUserTemplate>
	);
};

export default Tasks;

export async function getServerSideProps({ req, res }) {
	const cookie = req.headers.cookie;
	const tasks = await taskService.getTasks(cookie);
	return {
		props: {
			tasks
		}
	};
}
