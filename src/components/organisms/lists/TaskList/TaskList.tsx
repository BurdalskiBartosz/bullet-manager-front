import Font from 'components/atoms/Font';
import TaskListItem from 'components/molecules/TaskListItem';
import { FC } from 'react';
import { Box } from 'view/Tasks/shared/styles';

type TaskListProps = {};

const TaskList: FC<TaskListProps> = () => {
	return (
		<Box>
			<Font variant="midHeader">Dzisiejsze zadania</Font>
			<div>
				<TaskListItem
					title="Lorem ipsum nazwa zadania"
					description="Lorem ipsum opis zadania pod nazwą zadania z zbyt długim tekstem bla bla bla"
					state={false}
					category="notatki"
					priority="3"
				/>
			</div>
		</Box>
	);
};

export default TaskList;
