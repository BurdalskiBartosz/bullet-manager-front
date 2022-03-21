import {
	Box,
	Card,
	CardActions,
	CardContent,
	Typography,
	useTheme
} from '@mui/material';
import Button from 'src/components/atoms/Button';
import { useForm } from 'react-hook-form';
import useModal from 'src/hooks/useModal';

import Modal from 'src/components/organisms/Modal';
import NoteEditForm from 'src/components/organisms/forms/NotesForm/NoteEditForm';
import {
	useRemoveNoteMutation,
	useUpdateNoteMutation
} from 'src/store/api/notes';

const NoteCard = ({ note }) => {
	const theme = useTheme();
	const { isOpen, handleCloseModal, handleOpenModal } = useModal(false);
	const [updateNote] = useUpdateNoteMutation();
	const [deleteNote] = useRemoveNoteMutation();

	const cardStyles = {
		primary: {
			backgroundColor: theme.palette.cards.primary.main,
			color: theme.palette.cards.primary.dark
		},
		secondary: {
			backgroundColor: theme.palette.cards.secondary.main,
			color: theme.palette.cards.secondary.dark
		},
		tetiary: {
			backgroundColor: theme.palette.cards.tetiary.main,
			color: theme.palette.cards.tetiary.dark
		}
	};

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		defaultValues: {
			content: note.content,
			type: note.type
		}
	});

	const handleEditNote = (data) => {
		const noteData = { ...data, id: note.id };
		handleCloseModal();
		updateNote(noteData);
	};
	return (
		<Card sx={{ minWidth: 300, maxWidth: 345, ...cardStyles[note.type] }}>
			<Modal isOpen={isOpen} handleClose={handleCloseModal}>
				<NoteEditForm
					handleSubmit={() => handleSubmit(handleEditNote)}
					errors={errors}
					control={control}
				/>
			</Modal>
			<CardContent>
				<Typography
					variant="p"
					component="p"
					fontWeight="bold"
					fontSize="16px"
				>
					{note.content}
				</Typography>
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
					<Button size="small" onClick={() => deleteNote(note.id)}>
						Usuń
					</Button>
				</Box>
			</CardActions>
		</Card>
	);
};

export default NoteCard;
