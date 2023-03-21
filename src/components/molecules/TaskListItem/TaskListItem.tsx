import Font from 'components/atoms/Font';
import IconButton from 'components/atoms/IconButton';
import { FC, useState } from 'react';
import { tGetUserTasksResponse } from 'store/api/userTask';
import CheckboxInput from '../inputs/CheckboxInput/CheckboxInput';
import {
	Category,
	Description,
	IconsWrapper,
	InsideWrapper,
	Priority,
	Title,
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
					<CheckboxInput checked={false} />
					<Font
						style={{
							fontSize: '1.3rem',
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
				{category && <Category>{category.name}</Category>}
			</InsideWrapper>
		</Wrapper>
	);
};

export default TaskListItem;
