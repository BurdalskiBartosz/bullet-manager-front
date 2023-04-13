import Font from 'components/atoms/Font';
import TaskListItem from 'components/molecules/TaskListItem';
import { FC } from 'react';
import {
	tGetUserTasksGroupedByDateResponse,
	tGetUserTasksResponse,
	useEditUserTaskMutation
} from 'store/api/userTask';
import { Box } from 'view/Tasks/shared/styles';
import { List, TasksGroup, Wrapper } from './TaskList.style';
import Loader from 'components/atoms/Loader';

type TasksTypes =
	| tGetUserTasksResponse[]
	| tGetUserTasksGroupedByDateResponse[];

type TaskListProps = {
	tasks: TasksTypes | undefined;
	type?: 'today' | 'upcoming';
	isLoading: boolean;
};

const TaskList: FC<TaskListProps> = ({ tasks, type = 'today', isLoading }) => {
	const [editTask] = useEditUserTaskMutation();

	const getList = (tasks: TasksTypes) => {
		return tasks?.map((el, i) => {
			let item;
			if (Array.isArray(el)) {
				const [title, elements] = el;
				item = (
					<TasksGroup key={title}>
						<Font
							variant="midHeader"
							style={{ marginBottom: '20px' }}
						>
							{i === 0 ? 'Jutrzejsze' : title}
						</Font>
						{getList(elements)}
					</TasksGroup>
				);
			} else {
				item = (
					<TaskListItem
						key={el.id}
						id={el.id}
						title={el.title}
						description={el.description}
						categories={el.categories}
						priority={el.priority}
						isDone={el.isDone}
						editTask={editTask}
					/>
				);
			}
			return item;
		});
	};

	return (
		<Box>
			{isLoading && <Loader />}
			<Wrapper>
				<Font variant="midHeader">
					{type === 'today' ? 'Dzisiejsze zadania' : 'Nadchodzace'}
				</Font>
				{tasks?.length && <List>{getList(tasks)}</List>}
			</Wrapper>
		</Box>
	);
};

export default TaskList;
