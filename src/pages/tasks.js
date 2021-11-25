import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import Button from 'src/components/atoms/Button';
import Input from 'src/components/molecules/inputs/Input/Input';
import Select from 'src/components/molecules/inputs/Select/Select';
import Modal from 'src/components/organisms/Modal';
import useModal from 'src/hooks/useModal';
import LoggedUserTemplate from 'src/templates/LoggedUserTemplate/LoggedUserTemplate';

const Tasks = () => {
	const { isOpen, handleCloseModal, handleOpenModal } = useModal(false);
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm();

	const addTask = (data) => {
		console.log(data);
	};

	return (
		<LoggedUserTemplate>
			<Stack
				direction="row"
				alignItems="flex-start"
				justifyContent="space-between"
			>
				<Typography variant="h1">Zadania</Typography>
				<Button onClick={() => handleOpenModal()} variant="outlined">
					Dodaj zadanie
				</Button>
				<Modal isOpen={isOpen} handleClose={handleCloseModal}>
					<>
						<Typography variant="h3">Dodaj nowe zadanie</Typography>
						<Box component="form" onSubmit={handleSubmit(addTask)}>
							<Input
								name="name"
								label="Tytuł zadania"
								error={{
									isError: errors.name,
									message: 'Musisz podać nazwę zadania'
								}}
								control={control}
							/>
							<Input
								name="content"
								label="Treść zadania"
								error={{
									isError: errors.content,
									message: 'Musisz podać treść zadania'
								}}
								control={control}
								multiline
								rows={4}
							/>
							<Select
								name="type"
								label="Typ zadania"
								control={control}
							/>
							<Input
								name="dateToEnd"
								label="Deadline"
								type="datetime-local"
								control={control}
								defaultValue={new Date()
									.toISOString()
									.slice(0, -8)}
							/>
							<Button type="submit" variant="contained">
								Dodaj zadanie
							</Button>
						</Box>
					</>
				</Modal>
			</Stack>
		</LoggedUserTemplate>
	);
};

export default Tasks;
