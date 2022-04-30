import { FC, ReactChild } from 'react';
import { StyledButton } from './Button.styles';

type Props = {
	children: ReactChild;
	fn?: Function;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

const Button: FC<Props> = ({ children, fn = () => {}, type = 'button' }) => {
	return (
		<StyledButton type={type} onClick={() => fn()}>
			{children}
		</StyledButton>
	);
};
export default Button;
