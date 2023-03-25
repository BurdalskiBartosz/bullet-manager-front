import { AddUserTaskForm } from 'components';
import TaskList from 'components/organisms/lists/TaskList';
import { FC } from 'react';
import {
	useGetGroupedByDateTasksQuery,
	useGetUserTasksQuery
} from 'store/api/userTask';
import { Box } from './shared/styles';
import { Wrapper } from './Tasks.styles';

export type UserTaskProps = {};

const UserTasks: FC<UserTaskProps> = () => {
	const { data } = useGetUserTasksQuery();
	const { data: groupedData } = useGetGroupedByDateTasksQuery();
	return (
		<Wrapper>
			<AddUserTaskForm />
			{!!data?.length && <TaskList tasks={data} />}
			<Box />
		</Wrapper>
	);
};

export default UserTasks;
