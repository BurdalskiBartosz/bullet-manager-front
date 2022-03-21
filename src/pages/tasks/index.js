import {
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	Typography
} from '@mui/material';
import { useForm } from 'react-hook-form';
import Button from 'src/components/atoms/Button';
import TaskCard from 'src/components/molecules/cards/TaskCard/TaskCard';
import TaskForm from 'src/components/organisms/forms/TaskForm/TaskForm';
import Modal from 'src/components/organisms/Modal';
import useModal from 'src/hooks/useModal';
import LoggedUserTemplate from 'src/templates/LoggedUserTemplate/LoggedUserTemplate';
import { useGetTasksQuery, useAddTaskMutation } from 'src/store/api/tasks';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useState } from 'react';

const Tasks = ({ selectedDate }) => {
	const [priority, setPriority] = useState('0');

	const tasks = useGetTasksQuery({ where: { date: selectedDate, priority } });
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

	const handleChange = (event) => {
		setPriority(event.target.value);
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

				<Stack
					direction="row"
					alignItems="flex-start"
					justifyContent="space-between"
				>
					<FormControl sx={{ width: 200, mr: 2 }}>
						<InputLabel id="demo-simple-select-label">
							Priorytet
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={priority}
							label="priority"
							onChange={handleChange}
						>
							<MenuItem value={'0'}>Pokaż wszystkie</MenuItem>
							<MenuItem value={'1'}>Priorytet 1</MenuItem>
							<MenuItem value={'2'}>Priorytet 2</MenuItem>
							<MenuItem value={'3'}>Priorytet 3</MenuItem>
						</Select>
					</FormControl>
					<Box sx={{ mr: 2 }}>
						<Link href="/tasks/kanban" passHref>
							<Button variant="contained">
								Przejdź do kanbana
							</Button>
						</Link>
					</Box>
					<Button
						onClick={() => handleOpenModal()}
						variant="outlined"
					>
						Dodaj zadanie
					</Button>
				</Stack>
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
