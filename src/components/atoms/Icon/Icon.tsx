import { FC } from 'react';
import icons from 'assets/svgs';

export type tIconNames = 'password' | 'show_password';

export type tIcon = {
	iconName: tIconNames;
	fill?: string;
	width?: string;
	height?: string;
};

const Icon: FC<tIcon> = ({ iconName, fill, width, height }) => {
	const IconComponent = icons[iconName];

	if (!IconComponent) return null;

	return <IconComponent fill={fill} width={width} height={height} />;
};

export default Icon;
