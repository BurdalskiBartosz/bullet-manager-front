import { FC, ReactChild } from 'react';

type Props = {
	children: ReactChild;
};

const Link: FC<Props> = ({ children }) => {
	return <button>{children}</button>;
};
export default Link;
