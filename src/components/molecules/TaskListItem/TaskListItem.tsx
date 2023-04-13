import Font from 'components/atoms/Font';
import IconButton from 'components/atoms/IconButton';
import { FC } from 'react';
import { tGetUserTasksResponse } from 'store/api/userTask';
import CheckboxInput from '../inputs/CheckboxInput/CheckboxInput';
import {
	Category,
	Description,
	IconsWrapper,
	InsideWrapper,
	Priority,
	TopWrapper,
	Wrapper
} from './TaskListItem.style';

export type TaskListItemProps = Omit<
	tGetUserTasksResponse,
	'plannedFinishDate'
> & {
	editTask: any;
};

const TaskListItem: FC<TaskListItemProps> = ({
	id,
	title,
	description,
	categories,
	priority,
	isDone,
	editTask
}) => {
	const shortDescription =
		description.length >= 15
			? `${description.slice(0, 55)}...`
			: description;

	const onChange = () => {
		editTask({
			id,
			body: {
				isDone: !isDone
			}
		});
	};

	return (
		<Wrapper>
			<InsideWrapper>
				<TopWrapper>
					<CheckboxInput checked={isDone} onChange={onChange} />
					<Font
						style={{
							fontSize: '1.5rem',
							lineHeight: '1.5rem',
							fontWeight: 'bold',
							marginLeft: '7px'
						}}
					>
						{title}
					</Font>
				</TopWrapper>
				<IconsWrapper>
					<IconButton iconName="edit" width="18.5px" height="17px" />
					<IconButton
						iconName="deleteItem"
						width="13px"
						height="17px"
					/>
					<IconButton iconName="showMore" width="4px" height="17px" />
				</IconsWrapper>
			</InsideWrapper>
			<Description>{shortDescription}</Description>
			<InsideWrapper>
				<Priority>{priority}</Priority>
				{!!categories?.length &&
					categories.map(({ name }) => (
						<Category key={name}>{name}</Category>
					))}
			</InsideWrapper>
		</Wrapper>
	);
};

export default TaskListItem;
