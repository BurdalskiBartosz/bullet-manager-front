import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'src/components/atoms/Button';
import Input from 'src/components/molecules/inputs/Input/Input';
import Select from 'src/components/molecules/inputs/Select/Select';

const typeNoteSelectValues = [
	{
		key: 'primary',
		value: 'Domyślny'
	},
	{
		key: 'secondary',
		value: 'Inny rodzaj'
	},
	{
		key: 'tetiary',
		value: 'Trzeci rodzaj'
	}
];

const NotesForm = ({ handleSubmit, errors, control }) => {
	return (
		<>
			<Typography variant="h3">Dodaj nową notatkę</Typography>
			<Box component="form" onSubmit={handleSubmit()}>
				<Input
					name="content"
					label="Treść notatki"
					error={{
						isError: errors.content,
						message: 'Musisz podać treść notatki'
					}}
					control={control}
					multiline
					rows={8}
				/>
				<Select
					name="type"
					label="Typ zadania"
					control={control}
					options={typeNoteSelectValues}
				/>

				<Button type="submit" variant="contained">
					Dodaj zadanie
				</Button>
			</Box>
		</>
	);
};

export default NotesForm;
