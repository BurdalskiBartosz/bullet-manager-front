import { FC } from 'react';
import {
	Wrapper,
	StyledLogo,
	NavLogoWrapper,
	StyledList,
	BottomSideMenu,
	BottomLink
} from './SideMenu.style';
import logo from 'assets/images/bullet-manager-logo.png';
import { Link } from 'react-router-dom';
import Font from 'components/atoms/Font';
import { appRootRoute } from 'utils/constants';
import ListLink from 'components/molecules/ListLink';
import { tIconNames } from 'components/atoms/Icon/Icon';

type Props = {};

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

const SideMenu: FC<Props> = () => {
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
