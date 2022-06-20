import { useState } from 'react';
import { AddTaskForm, Button } from 'components';
import { Table } from 'components';
import { ButtonsWrapper } from './Tasks.styles';
import { mockedTasks } from './mock';

type tViewType = 'cards' | 'table';

const Tasks = () => {
	const [view, setView] = useState<tViewType>('table');

	const addTask = () => {
		console.log('Dodaj zadanie');
	};

	return (
		<div>
			{console.log(mockedTasks)}
			<ButtonsWrapper>
				<Button fn={() => addTask()}>Dodaj zadanie</Button>
				<Button fn={() => setView('table')} colorType="dark">
					Widok tabeli
				</Button>
				<Button fn={() => setView('cards')} colorType="secondary">
					Widok karteczek
				</Button>
			</ButtonsWrapper>
			<AddTaskForm />
			{view === 'table' ? <Table /> : <div>CARDS</div>}
		</div>
	);
};

export default Tasks;
