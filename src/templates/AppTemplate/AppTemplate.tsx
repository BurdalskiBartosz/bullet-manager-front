import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { SideMenu, TopMenu } from 'components';
import { Main, PageWrapper, Wrapper } from './AppTemplate.styles';
import Circles from './_components/Circles';

type Props = {};

const AppTemplate: FC<Props> = () => {
	return (
		<Wrapper>
			<Circles />
			<Main>
				<SideMenu />
				<div>
					<TopMenu />
					<PageWrapper>
						<Outlet />
					</PageWrapper>
				</div>
			</Main>
		</Wrapper>
	);
};

export default AppTemplate;
