import { SideMenu } from 'components';
import TopMenu from 'components/organisms/menus/TopMenu';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Wrapper } from './AppTemplate.styles';
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
					<Outlet />
				</div>
			</Main>
		</Wrapper>
	);
};

export default AppTemplate;
