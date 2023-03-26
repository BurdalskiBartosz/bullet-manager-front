import { AddUserTaskForm } from 'components';
import TaskList from 'components/organisms/lists/TaskList';
import { FC } from 'react';
import {
	useGetGroupedByDateTasksQuery,
	useGetUserTasksQuery
} from 'store/api/userTask';
import { Wrapper } from './Tasks.styles';

export type UserTaskProps = {};

const UserTasks: FC<UserTaskProps> = () => {
	const { data } = useGetUserTasksQuery();
	const { data: groupedData } = useGetGroupedByDateTasksQuery();
	return (
		<Wrapper>
			<AddUserTaskForm />
			<TaskList tasks={data} />
			<TaskList tasks={groupedData} type="upcoming" />
		</Wrapper>
	);
};

export default UserTasks;
