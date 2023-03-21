import { AddUserTaskForm } from 'components';
import TaskList from 'components/organisms/lists/TaskList';
import { FC } from 'react';
import { useGetUserTasksQuery } from 'store/api/userTask';
import { Box } from './shared/styles';
import { Wrapper } from './Tasks.styles';

export type UserTaskProps = {};

const UserTasks: FC<UserTaskProps> = () => {
	const { data } = useGetUserTasksQuery();
	console.log(new Date());
	console.log(data);
	return (
		<Wrapper>
			<AddUserTaskForm />
			{!!data?.length && <TaskList tasks={data} />}
			<Box />
		</Wrapper>
	);
};

export default UserTasks;
