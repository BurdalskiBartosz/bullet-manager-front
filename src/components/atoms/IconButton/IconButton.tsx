import { FC } from 'react';
import Icon, { tIcon } from '../Icon/Icon';
import { StyledIconButton } from './IconButton.styles';

type Props = {
	fn?: Function;
} & tIcon;

const IconButton: FC<Props> = ({
	iconName,
	fill,
	fn = () => {},
	className,
	width = '20px',
	height = '20px'
}) => {
	return (
		<StyledIconButton
			className={className}
			type="button"
			onClick={() => fn()}
		>
			<Icon
				iconName={iconName}
				fill={fill}
				width={width}
				height={height}
			/>
		</StyledIconButton>
	);
};
export default IconButton;
