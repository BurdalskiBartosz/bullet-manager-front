import { Grid, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Button from 'src/components/atoms/Button';
import NotesForm from 'src/components/organisms/forms/NotesForm/NotesForm';
import Modal from 'src/components/organisms/Modal';
import useModal from 'src/hooks/useModal';
import LoggedUserTemplate from 'src/templates/LoggedUserTemplate/LoggedUserTemplate';
import { useGetNotesQuery, useAddNoteMutation } from 'src/store/api/notes';
import { Box } from '@mui/system';

const Notes = ({ selectedDate }) => {
	const notes = useGetNotesQuery();
	const [addNote] = useAddNoteMutation();

	const { isOpen, handleCloseModal, handleOpenModal } = useModal(false);
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm();

	const handleAddNote = (data) => {
		const noteData = { ...data, date: selectedDate };
		handleCloseModal();
		addNote(noteData);
	};

	return (
		<LoggedUserTemplate>
			<Modal isOpen={isOpen} handleClose={handleCloseModal}>
				<NotesForm
					handleSubmit={() => handleSubmit(handleAddNote)}
					errors={errors}
					control={control}
				/>
			</Modal>
			<Stack
				direction="row"
				alignItems="flex-start"
				justifyContent="space-between"
			>
				<Typography variant="h1">Harmonogram 01/30/2022 </Typography>
				{/* <Button onClick={() => handleOpenModal()} variant="outlined">
					Dodaj harmonogram
				</Button> */}
				<Button onClick={() => handleOpenModal()} variant="outlined">
					Edytuj harmonogram
				</Button>
			</Stack>
			<Box sx={{ width: '350px' }}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography>8:00</Typography>
					<Typography>Pobudka</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography>9:00</Typography>
					<Typography>Wyjście z psem</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography>10:00</Typography>
					<Typography>Wyjście do pracy</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography>15:00</Typography>
					<Typography>Spotkanie</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography>17:00</Typography>
					<Typography>Powrót do domu</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography>22:00</Typography>
					<Typography>Położyć się spać</Typography>
				</Box>
			</Box>
		</LoggedUserTemplate>
	);
};

export default Notes;
