import Font from 'components/atoms/Font';
import TaskListItem from 'components/molecules/TaskListItem';
import { FC } from 'react';
import {
	tGetUserTasksGroupedByDateResponse,
	tGetUserTasksResponse
} from 'store/api/userTask';
import { Box } from 'view/Tasks/shared/styles';
import { List, TasksGroup, Wrapper } from './TaskList.style';

type TaskListProps = {
	tasks:
		| tGetUserTasksResponse[]
		| tGetUserTasksGroupedByDateResponse[]
		| undefined;
	type?: 'today' | 'upcoming';
};

const TaskList: FC<TaskListProps> = ({ tasks, type = 'today' }) => {
	const getTasks = (tasks: tGetUserTasksResponse[]) => {
		return (
			tasks?.length &&
			tasks.map(({ id, title, description, categories, priority }) => {
				return (
					<TaskListItem
						key={id}
						title={title}
						description={description}
						categories={categories}
						priority={priority}
					/>
				);
			})
		);
	};
	const getList = () => {
		return tasks?.map((el, i) => {
			let item;
			if (Array.isArray(el)) {
				const [title, elements] = el;
				item = (
					<TasksGroup>
						<Font variant="midHeader">
							{i === 0 ? 'Jutrzejsze' : title}
						</Font>
						{getTasks(elements)}
					</TasksGroup>
				);
			} else {
				item = (
					<TaskListItem
						key={el.id}
						title={el.title}
						description={el.description}
						categories={el.categories}
						priority={el.priority}
					/>
				);
			}
			return item;
		});
	};
	getList();
	return (
		<Box>
			<Wrapper>
				<Font variant="midHeader">
					{type === 'today' ? 'Dzisiejsze zadania' : 'Nadchodzace'}
				</Font>
				<List>{getList()}</List>
			</Wrapper>
		</Box>
	);
};

export default TaskList;
