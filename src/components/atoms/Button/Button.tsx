import { FC, ReactChild } from 'react';

type Props = {
	children: ReactChild;
};

const Button: FC<Props> = ({ children }) => {
	return <button>{children}</button>;
};
export default Button;
