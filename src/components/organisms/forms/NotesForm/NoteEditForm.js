import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'src/components/atoms/Button';
import Input from 'src/components/molecules/inputs/Input/Input';
import Select from 'src/components/molecules/inputs/Select/Select';
import { typeNoteSelectValues } from './selectData';

const NoteEditForm = ({ handleSubmit, errors, control }) => {
	return (
		<>
			<Typography variant="h3">Edytuj notatkę</Typography>
			<Box component="form" onSubmit={handleSubmit()}>
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
					options={typeNoteSelectValues}
				/>

				<Button type="submit" variant="contained">
					Edytuj
				</Button>
			</Box>
		</>
	);
};

export default NoteEditForm;
