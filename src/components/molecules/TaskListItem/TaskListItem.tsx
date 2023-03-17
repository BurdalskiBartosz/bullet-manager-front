import { FC } from 'react';
import CheckboxInput from '../inputs/CheckboxInput/CheckboxInput';
import {
	Category,
	Description,
	InsideWrapper,
	Priority,
	Title,
	TopWrapper,
	Wrapper
} from './TaskListItem.style';

export type TaskListItemProps = {
	title: string;
	description: string;
	state: boolean;
	category: string;
	priority: string;
};

const TaskListItem: FC<TaskListItemProps> = ({
	title,
	description,
	state,
	category,
	priority
}) => {
	const shortDescription =
		description.length >= 15
			? `${description.slice(0, 55)}...`
			: description;

	return (
		<Wrapper>
			<InsideWrapper>
				<TopWrapper>
					<CheckboxInput checked={state} />
					<Title>{title}</Title>
				</TopWrapper>
				<div>ICONS</div>
			</InsideWrapper>
			<Description>{shortDescription}</Description>
			<InsideWrapper>
				<Priority>{priority}</Priority>
				<Category>{category}</Category>
			</InsideWrapper>
		</Wrapper>
	);
};

export default TaskListItem;
