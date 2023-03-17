import { AddUserTaskForm } from 'components';
import { Wrapper } from './Tasks.styles';

export type UserTask = {
	id: number;
	title: string;
	plannedFinishDate: string;
	description: string;
	category?: string | JSX.Element;
};

const UserTasks = () => {
	return (
		<Wrapper>
			<AddUserTaskForm />
		</Wrapper>
	);
};

export default UserTasks;
