import { Grid, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Button from 'src/components/atoms/Button';
import BookForm from 'src/components/organisms/forms/BookForm/BookForm';
import Modal from 'src/components/organisms/Modal';
import useModal from 'src/hooks/useModal';
import LoggedUserTemplate from 'src/templates/LoggedUserTemplate/LoggedUserTemplate';
import { useGetNotesQuery, useAddNoteMutation } from 'src/store/api/notes';
import NoteCard from 'src/components/molecules/cards/NoteCard/NoteCard';

const Books = ({ selectedDate }) => {
	const books = useGetNotesQuery();
	const [addNote] = useAddNoteMutation();

	const { isOpen, handleCloseModal, handleOpenModal } = useModal(false);
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm();
	console.log(control);
	const handleAddTask = (data) => {
		const noteData = { ...data, date: selectedDate };
		handleCloseModal();
		addNote(noteData);
	};

	return (
		<LoggedUserTemplate>
			<Modal isOpen={isOpen} handleClose={handleCloseModal}>
				<BookForm
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
				<Typography variant="h1">Książki</Typography>
				<Button onClick={() => handleOpenModal()} variant="outlined">
					Dodaj książkę
				</Button>
			</Stack>
			<Grid container spacing={3}>
				{books.data &&
					books.data.map((note) => (
						<Grid item key={note.id}>
							<NoteCard note={note} />
						</Grid>
					))}
			</Grid>
		</LoggedUserTemplate>
	);
};

export default Books;
