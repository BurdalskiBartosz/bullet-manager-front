import { FC } from 'react';
import Icon, { tIconNames } from '../Icon/Icon';
import { StyledIconButton } from './IconButton.styles';

type Props = {
	fn?: Function;
	icon: tIconNames;
	className?: string;
};

const IconButton: FC<Props> = ({ icon, fn = () => {}, className }) => {
	return (
		<StyledIconButton
			className={className}
			type="button"
			onClick={() => fn()}
		>
			<Icon iconName={icon} width="20px" height="20px" />
		</StyledIconButton>
	);
};
export default IconButton;
