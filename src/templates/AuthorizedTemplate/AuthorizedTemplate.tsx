import { FC } from 'react';
import { Wrapper } from './AuthorizedTemplate.styles';
import Circles from './_components/Circles';

type Props = {
	children: React.ReactNode[];
};

const AuthorizedTemplate: FC<Props> = ({ children }) => {
	return (
		<Wrapper>
			<Circles />
			{children}
		</Wrapper>
	);
};

export default AuthorizedTemplate;
