import { FC } from 'react';
import Icon, { tIcon } from '../Icon/Icon';
import { StyledIconButton } from './IconButton.styles';

type tProps = {
	fn?: Function;
} & tIcon;

const IconButton: FC<tProps> = ({
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
			data-testid="icon-button-component"
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
