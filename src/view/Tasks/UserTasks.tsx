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
	const { data, isLoading } = useGetUserTasksQuery();
	const { data: groupedData, isLoading: isGroupedDataLoading } =
		useGetGroupedByDateTasksQuery();

	return (
		<Wrapper>
			<AddUserTaskForm />
			<TaskList tasks={data} isLoading={isLoading} />
			<TaskList
				tasks={groupedData}
				type="upcoming"
				isLoading={isGroupedDataLoading}
			/>
		</Wrapper>
	);
};

export default UserTasks;
