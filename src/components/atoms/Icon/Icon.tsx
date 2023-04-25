import { FC } from 'react';
import icons from 'assets/svgs';

export type tIconNames = keyof typeof icons;

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
