import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'src/components/atoms/Button';
import Input from 'src/components/molecules/inputs/Input/Input';
import Select from 'src/components/molecules/inputs/Select/Select';
import { marks, states } from './selectData';

const BookEditForm = ({ handleSubmit, errors, control, watch }) => {
	return (
		<>
			<Typography variant="h3">Edytuj książkę</Typography>
			<Box component="form" onSubmit={handleSubmit()}>
				<Input
					name="title"
					label="Tytuł"
					error={{
						isError: errors.title,
						message: 'Musisz podać tytuł'
					}}
					control={control}
				/>
				<Input
					name="author"
					label="Autor"
					error={{
						isError: errors.author,
						message: 'Musisz podać autora'
					}}
					control={control}
				/>
				<Select
					name="state"
					label="Stan"
					control={control}
					options={states}
					defaultValue="to_read"
				/>
				{watch('state') === 'read' && (
					<Select
						name="mark"
						label="Ocena"
						control={control}
						options={marks}
						defaultValue={5}
					/>
				)}
				<Input
					name="opinion"
					label="Notatka do książki"
					control={control}
					multiline
					rows={8}
				/>

				<Button type="submit" variant="contained">
					Edytuj
				</Button>
			</Box>
		</>
	);
};

export default BookEditForm;
