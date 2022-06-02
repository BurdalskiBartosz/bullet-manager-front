import { SideMenu } from 'components';
import TopMenu from 'components/organisms/menus/TopMenu';
import { FC } from 'react';
import { Main, Wrapper } from './AuthorizedTemplate.styles';
import Circles from './_components/Circles';

type Props = {
	children: React.ReactNode[];
};

const AuthorizedTemplate: FC<Props> = ({ children }) => {
	return (
		<Wrapper>
			<Circles />
			<Main>
				<SideMenu />
				<div>
					<TopMenu />
					{children}
				</div>
			</Main>
		</Wrapper>
	);
};

export default AuthorizedTemplate;
