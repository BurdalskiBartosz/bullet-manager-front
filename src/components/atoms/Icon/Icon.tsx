import { FC } from 'react';
import icons from 'assets/svgs';

export type tIconNames =
	| 'password'
	| 'show_password'
	| 'magnifier'
	| 'arrow_right';

export type tIcon = {
	iconName: tIconNames;
	fill?: string;
	width?: string;
	height?: string;
	className?: string;
};

const Icon: FC<tIcon> = ({ iconName, fill, width, height, className }) => {
	const IconComponent = icons[iconName];

	if (!IconComponent) return null;

	return (
		<IconComponent
			className={className}
			fill={fill}
			width={width}
			height={height}
		/>
	);
};

export default Icon;
