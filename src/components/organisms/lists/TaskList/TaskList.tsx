import Font from 'components/atoms/Font';
import TaskListItem from 'components/molecules/TaskListItem';
import { FC } from 'react';
import { tGetUserTasksResponse } from 'store/api/userTask';
import { Box } from 'view/Tasks/shared/styles';
import { List, Wrapper } from './TaskList.style';

type TaskListProps = {
	tasks: tGetUserTasksResponse[];
};

const TaskList: FC<TaskListProps> = ({ tasks }) => {
	return (
		<Box>
			<Wrapper>
				<Font variant="midHeader">Dzisiejsze zadania</Font>
				<List>
					{tasks.map(
						({ id, title, description, category, priority }) => {
							return (
								<TaskListItem
									key={id}
									title={title}
									description={description}
									category={category}
									priority={priority}
								/>
							);
						}
					)}
				</List>
			</Wrapper>
		</Box>
	);
};

export default TaskList;
