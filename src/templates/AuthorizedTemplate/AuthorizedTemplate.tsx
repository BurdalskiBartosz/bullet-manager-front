import { SideMenu } from 'components';
import { FC } from 'react';
import { SideMenu } from '../../components';
import { Wrapper } from './AuthorizedTemplate.styles';
import Circles from './_components/Circles';

type Props = {
	children: React.ReactNode[];
};

const AuthorizedTemplate: FC<Props> = ({ children }) => {
	return (
		<Wrapper>
			<Circles />
			<SideMenu />
			{children}
		</Wrapper>
	);
};

export default AuthorizedTemplate;
