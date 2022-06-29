import { useState } from 'react';
import { AddTaskForm, Button, Modal } from 'components';
import { Table } from 'components';
import { ButtonsWrapper } from './Tasks.styles';
import useModal from 'hooks/useModal';
import { useGetTasksQuery } from 'store/api/task';

type tViewType = 'cards' | 'table';

const Tasks = () => {
	const [view, setView] = useState<tViewType>('table');
	const { handleCloseModal, handleOpenModal, isOpen } = useModal();
	const tasks = useGetTasksQuery();
	console.log(tasks);
	const addTask = () => {
		console.log('Dodaj zadanie');
		handleOpenModal();
	};

	return (
		<div>
			<ButtonsWrapper>
				<Button fn={() => addTask()}>Dodaj zadanie</Button>
				<Button fn={() => setView('table')} colorType="dark">
					Widok tabeli
				</Button>
				<Button fn={() => setView('cards')} colorType="secondary">
					Widok karteczek
				</Button>
			</ButtonsWrapper>
			{view === 'table' ? <Table /> : <div>CARDS</div>}
			{isOpen ? (
				<Modal header="Dodaj zadanie" handleClose={handleCloseModal}>
					<AddTaskForm />
				</Modal>
			) : null}
		</div>
	);
};

export default Tasks;
