import { Grid, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Button from 'src/components/atoms/Button';
import BookForm from 'src/components/organisms/forms/BookForm/BookForm';
import Modal from 'src/components/organisms/Modal';
import useModal from 'src/hooks/useModal';
import LoggedUserTemplate from 'src/templates/LoggedUserTemplate/LoggedUserTemplate';
import BookCard from 'src/components/molecules/cards/BookCard/BookCard';
import { useAddBookMutation, useGetBooksQuery } from 'src/store/api/books';

const Books = ({ selectedDate }) => {
	const books = useGetBooksQuery();
	const [addBook] = useAddBookMutation();

	const { isOpen, handleCloseModal, handleOpenModal } = useModal(false);
	const {
		handleSubmit,
		control,
		formState: { errors },
		watch
	} = useForm();

	const handleAddBook = (data) => {
		const bookData = { ...data, date: selectedDate };
		handleCloseModal();
		addBook(bookData);
	};

	return (
		<LoggedUserTemplate>
			<Modal isOpen={isOpen} handleClose={handleCloseModal}>
				<BookForm
					handleSubmit={() => handleSubmit(handleAddBook)}
					errors={errors}
					control={control}
					watch={watch}
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
					books.data.map((book) => (
						<Grid item key={book.id}>
							<BookCard book={book} />
						</Grid>
					))}
			</Grid>
		</LoggedUserTemplate>
	);
};

export default Books;
