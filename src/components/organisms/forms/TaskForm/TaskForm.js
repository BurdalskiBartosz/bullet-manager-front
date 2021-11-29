import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'src/components/atoms/Button';
import Input from 'src/components/molecules/inputs/Input/Input';
import Select from 'src/components/molecules/inputs/Select/Select';

const prioritySelectValues = [
	{
		key: '1',
		value: '1'
	},
	{
		key: '2',
		value: '2'
	},
	{
		key: '3',
		value: '3'
	}
];
const typeSelectValues = [
	{
		key: 'DAILY',
		value: 'Dzienne'
	},
	{
		key: 'WEEKLY',
		value: 'Tygodniowe'
	},
	{
		key: 'MONTHLY',
		value: 'Miesięczne'
	}
];

const TaskForm = ({ handleSubmit, errors, control }) => {
	return (
		<>
			<Typography variant="h3">Dodaj nowe zadanie</Typography>
			<Box component="form" onSubmit={handleSubmit()}>
				<Input
					name="title"
					label="Tytuł zadania"
					error={{
						isError: errors.title,
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
					options={typeSelectValues}
				/>
				<Select
					name="priority"
					label="Priorytet"
					control={control}
					options={prioritySelectValues}
				/>

				<Button type="submit" variant="contained">
					Dodaj zadanie
				</Button>
			</Box>
		</>
	);
};

export default TaskForm;
