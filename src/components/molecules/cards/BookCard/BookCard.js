import {
	Box,
	Card,
	CardActions,
	CardContent,
	IconButton,
	Typography
} from '@mui/material';
import Button from 'src/components/atoms/Button';
import { useForm } from 'react-hook-form';
import useModal from 'src/hooks/useModal';

import Modal from 'src/components/organisms/Modal';
import { states } from 'src/components/organisms/forms/BookForm/selectData';
import BookEditForm from 'src/components/organisms/forms/BookForm/BookEditForm';
import {
	useRemoveBookMutation,
	useUpdateBookMutation
} from 'src/store/api/books';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
const BookCard = ({ book }) => {
	const { isOpen, handleCloseModal, handleOpenModal } = useModal(false);
	const [updateBook] = useUpdateBookMutation();
	const [deleteBook] = useRemoveBookMutation();

	const {
		handleSubmit,
		control,
		formState: { errors },
		watch
	} = useForm({
		defaultValues: {
			title: book.title,
			author: book.author,
			state: book.state,
			mark: book.mark,
			opinion: book.opinion
		}
	});

	const handleEditBook = (data) => {
		const bookData = { ...data, id: book.id };
		handleCloseModal();
		updateBook(bookData);
	};
	const getTextValue = (text) => {
		const { value } = states.find((el) => el.key === text);
		return value;
	};
	return (
		<Card sx={{ minWidth: 325, maxWidth: 400 }}>
			<Modal isOpen={isOpen} handleClose={handleCloseModal}>
				<BookEditForm
					handleSubmit={() => handleSubmit(handleEditBook)}
					errors={errors}
					control={control}
					watch={watch}
				/>
			</Modal>
			<CardContent>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box>
						<Typography
							variant="p"
							component="p"
							fontWeight="bold"
							fontSize="16px"
						>
							{book.title}
						</Typography>
						<Typography
							variant="p"
							component="p"
							fontWeight="bold"
							fontSize="13px"
						>
							{book.author}
						</Typography>
						<Typography variant="p" component="p" fontSize="12px">
							{book.opinion}
						</Typography>
						{book.state === 'read' && (
							<Box
								sx={{
									display: 'flex',
									mt: '15px',
									alignItems: 'center'
								}}
							>
								<Typography
									variant="p"
									component="p"
									fontSize="15px"
									marginTop="5px"
								>
									Przeczytana: 2
								</Typography>
								<Box>
									<IconButton
										onClick={() => setCounter(counter + 1)}
									>
										<Add />
									</IconButton>

									<IconButton
										onClick={() => setCounter(counter - 1)}
									>
										<Remove />
									</IconButton>
								</Box>
							</Box>
						)}
					</Box>
					<Box>
						<Typography variant="p" component="p" fontSize="13px">
							{getTextValue(book.state)}
						</Typography>
						{book.mark != 0 && book.state === 'read' && (
							<Typography
								variant="p"
								component="p"
								fontWeight="bold"
								fontSize="16px"
							>
								{book.mark}
							</Typography>
						)}
					</Box>
				</Box>
			</CardContent>
			<CardActions
				sx={{
					disply: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<Box>
					<Button size="small" onClick={() => handleOpenModal()}>
						Edytuj
					</Button>
					<Button size="small" onClick={() => deleteBook(book.id)}>
						Usuń
					</Button>
				</Box>
			</CardActions>
		</Card>
	);
};

export default BookCard;
