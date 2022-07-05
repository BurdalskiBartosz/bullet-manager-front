import { FC } from 'react';
import { Link } from 'react-router-dom';
import { appRootRoute } from 'utils/constants';
import { tIconNames } from 'components/atoms/Icon/Icon';
import { Font, ListLink } from 'components';
import {
	Wrapper,
	StyledLogo,
	NavLogoWrapper,
	StyledList,
	BottomSideMenu,
	BottomLink
} from './SideMenu.style';
import logo from 'assets/images/bullet-manager-logo.png';

type tProps = {};

const menuItems = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: 'dashboard'
	},
	{
		path: '/tasks',
		name: 'Tasks',
		icon: 'task'
	},
	{
		path: '/notes',
		name: 'Notes',
		icon: 'note'
	},
	{
		path: '/lists',
		name: 'Lists',
		icon: 'list'
	},
	{
		path: '/schedules',
		name: 'Schedules',
		icon: 'schedule'
	},
	{
		path: '/goals',
		name: 'Goals',
		icon: 'goal'
	},
	{
		path: '/calendar',
		name: 'Calendar',
		icon: 'calendar'
	},
	{
		path: '/projects',
		name: 'Projects',
		icon: 'project'
	}
];

const SideMenu: FC<tProps> = () => {
	const getMenuList = () =>
		menuItems.map((item) => (
			<ListLink
				key={`/${appRootRoute}${item.path}`}
				link={`/${appRootRoute}${item.path}`}
				iconName={item.icon as tIconNames}
				text={item.name}
			/>
		));
	return (
		<Wrapper>
			<NavLogoWrapper>
				<Link to={`/${appRootRoute}`}>
					<StyledLogo src={logo} alt="" title="" />
				</Link>
			</NavLogoWrapper>
			<nav>
				<StyledList>{getMenuList()}</StyledList>
			</nav>
			<BottomSideMenu>
				<BottomLink to={`/${appRootRoute}`}>
					<Font variant="menu">Invite a user</Font>
				</BottomLink>
				<BottomLink to={`/${appRootRoute}`}>
					<Font variant="menu">Help</Font>
				</BottomLink>
			</BottomSideMenu>
		</Wrapper>
	);
};

export default SideMenu;
