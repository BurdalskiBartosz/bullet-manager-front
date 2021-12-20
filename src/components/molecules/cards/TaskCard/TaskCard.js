import {
	Card,
	CardActions,
	CardContent,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Typography
} from '@mui/material';
import Button from 'src/components/atoms/Button';
import useModal from 'src/hooks/useModal';
import Modal from 'src/components/organisms/Modal';
import TaskEditForm from 'src/components/organisms/forms/TaskForm/TaskEditForm';
import { useForm } from 'react-hook-form';
import { useUpdateTaskMutation } from 'src/store/api/tasks';

const TaskCard = ({ task }) => {
	const { isOpen, handleCloseModal, handleOpenModal } = useModal(false);
	const [updateTask] = useUpdateTaskMutation();

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		defaultValues: {
			title: task.title,
			content: task.content,
			priority: task.priority,
			type: task.type
		}
	});

	const handleEditTask = (data) => {
		const taskData = { ...data, id: task.id };
		handleCloseModal();
		updateTask(taskData);
	};

	return (
		<Card sx={{ minWidth: 300, maxWidth: 345 }}>
			<Modal isOpen={isOpen} handleClose={handleCloseModal}>
				<TaskEditForm
					handleSubmit={() => handleSubmit(handleEditTask)}
					errors={errors}
					control={control}
					taskId={task.id}
				/>
			</Modal>
			<CardContent>
				<Typography variant="h4">{task.title}</Typography>
				<Typography variant="p" component="p">
					{task.content}
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					disply: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<Button size="small" onClick={() => handleOpenModal()}>
					Edytuj
				</Button>
				<FormGroup>
					<FormControlLabel control={<Checkbox />} label="Wykonane" />
				</FormGroup>
			</CardActions>
		</Card>
	);
};

export default TaskCard;
