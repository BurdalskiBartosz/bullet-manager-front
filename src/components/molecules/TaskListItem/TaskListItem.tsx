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
	'id' | 'plannedFinishDate'
>;

const TaskListItem: FC<TaskListItemProps> = ({
	title,
	description,
	categories,
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
					<CheckboxInput checked={false} />
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
					categories.map((category) => (
						<Category>{category.name}</Category>
					))}
			</InsideWrapper>
		</Wrapper>
	);
};

export default TaskListItem;
