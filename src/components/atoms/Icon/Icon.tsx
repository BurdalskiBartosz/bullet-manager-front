import { FC } from 'react';
import icons from 'assets/svgs';

export type tIconNames =
	| 'password'
	| 'show_password'
	| 'magnifier'
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
	| 'task';

export type tIcon = {
	iconName: tIconNames;
	fill?: string;
	width?: string;
	height?: string;
	className?: string;
	viewBox?: string;
};

const Icon: FC<tIcon> = ({
	iconName,
	fill,
	width = '20px',
	height = '20px',
	className,
	viewBox = '0 0 24 24'
}) => {
	const IconComponent = icons[iconName];

	if (!IconComponent) return null;

	return (
		<IconComponent
			className={className}
			fill={fill}
			width={width}
			height={height}
			viewBox={viewBox}
		/>
	);
};

export default Icon;
