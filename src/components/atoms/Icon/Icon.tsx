import { FC } from 'react';
import icons from 'assets/svgs';

export type tIconNames =
	| 'password'
	| 'show_password'
	| 'magnifier'
	| 'calendar'
	| 'arrow_right'
	| 'add'
	| 'goal'
	| 'note'
	| 'project'
	| 'schedule'
	| 'list'
	| 'account'
	| 'settings'
	| 'logout'
	| 'task'
	| 'close'
	| 'double_navigate_before'
	| 'navigate_before'
	| 'navigate_next'
	| 'double_navigate_next'
	| 'filters'
	| 'edit'
	| 'deleteItem'
	| 'showMore';

export type tIcon = {
	iconName: tIconNames;
	fill?: string;
	width?: string;
	height?: string;
	className?: string;
};

const Icon: FC<tIcon> = ({
	iconName,
	fill,
	width = '20px',
	height = '20px',
	className
}) => {
	const IconComponent = icons[iconName];

	if (!IconComponent) return null;

	return (
		<IconComponent
			className={className}
			fill={fill}
			width={width}
			height={height}
			data-testid="icon-component"
		/>
	);
};

export default Icon;
