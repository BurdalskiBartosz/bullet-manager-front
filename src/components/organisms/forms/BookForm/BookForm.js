import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useWatch } from 'react-hook-form';
import Button from 'src/components/atoms/Button';
import Input from 'src/components/molecules/inputs/Input/Input';
import Select from 'src/components/molecules/inputs/Select/Select';

const bookState = [
	{
		key: 'to_read',
		value: 'Do przeczytania'
	},
	{
		key: 'read',
		value: 'Przeczytana'
	},
	{
		key: 'currently_reading',
		value: 'W trakcie czytania'
	}
];
const bookMark = [
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
	},
	{
		key: '4',
		value: '4'
	},
	{
		key: '5',
		value: '5'
	}
];

const BookForm = ({ handleSubmit, errors, control }) => {
	const state = useWatch({
		control,
		name: 'state',
		defaultValue: 'to_read'
	});
	return (
		<>
			<Typography variant="h3">Dodaj książkę</Typography>
			<Box component="form" onSubmit={handleSubmit()}>
				POLE NA ZDJECIE
				<Input
					name="title"
					label="Tytuł książki"
					error={{
						isError: errors.title,
						message: 'Musisz podać tytuł książki'
					}}
					control={control}
				/>
				<Input
					name="author"
					label="Autor książki"
					error={{
						isError: errors.author,
						message: 'Musisz podać autora książki'
					}}
					control={control}
				/>
				<Input
					name="opinion"
					label="Opinia na temat książki"
					control={control}
					multiline
					rows={4}
				/>
				<Select
					name="state"
					label="Wybierz"
					control={control}
					options={bookState}
				/>
				{state !== 'to_read' && (
					<Select
						name="mark"
						label="Ocena"
						control={control}
						options={bookMark}
					/>
				)}
				<Button type="submit" variant="contained">
					Dodaj książkę
				</Button>
			</Box>
		</>
	);
};

export default BookForm;
