import { AddUserTaskForm } from 'components';
import TaskList from 'components/organisms/lists/TaskList';
import { FC } from 'react';
import { Wrapper } from './Tasks.styles';

export type UserTaskProps = {};

const UserTasks: FC<UserTaskProps> = () => {
	return (
		<Wrapper>
			<AddUserTaskForm />
			<TaskList />
		</Wrapper>
	);
};

export default UserTasks;
