import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { SideMenu, TopMenu } from 'components';
import { Main, PageWrapper, Wrapper } from './AppTemplate.styles';
import Circles from './_components/Circles';

type tProps = {};

const AppTemplate: FC<tProps> = () => {
	return (
		<Wrapper>
			<Circles />
			<Main>
				<SideMenu />
				<div style={{ height: 'calc(100vh - 40px)' }}>
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
