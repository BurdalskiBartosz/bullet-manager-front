import { FC } from 'react';
import {
	Wrapper,
	StyledLogo,
	NavLogoWrapper,
	StyledList,
	StyledListItem,
	BottomSideMenu,
	BottomLink,
	MenuLink
} from './SideMenu.style';
import logo from 'assets/images/bullet-manager-logo.png';
import { Link } from 'react-router-dom';
import Font from 'components/atoms/Font';

type Props = {};

const menuItems = [
	{
		path: '/dashboard',
		name: 'Dashboard'
	},
	{
		path: '/tasks',
		name: 'Tasks'
	},
	{
		path: '/notes',
		name: 'Notes'
	},
	{
		path: '/lists',
		name: 'Lists'
	},
	{
		path: '/schedules',
		name: 'Schedules'
	},
	{
		path: '/goals',
		name: 'Goals'
	},
	{
		path: '/calendar',
		name: 'Calendar'
	},
	{
		path: '/projects',
		name: 'Projects'
	}
];

const SideMenu: FC<Props> = () => {
	const getMenuList = () =>
		menuItems.map((item) => {
			return (
				<StyledListItem key={item.name}>
					<MenuLink to={`/app${item.path}`}>
						<Font variant="menu">{item.name}</Font>
					</MenuLink>
				</StyledListItem>
			);
		});
	return (
		<Wrapper>
			<NavLogoWrapper>
				<Link to="/app">
					<StyledLogo src={logo} alt="" title="" />
				</Link>
			</NavLogoWrapper>
			<nav>
				<StyledList>{getMenuList()}</StyledList>
			</nav>
			<BottomSideMenu>
				<BottomLink to="/app">
					<Font variant="menu">Invite a user</Font>
				</BottomLink>
				<BottomLink to="/app">
					<Font variant="menu">Help</Font>
				</BottomLink>
			</BottomSideMenu>
		</Wrapper>
	);
};

export default SideMenu;
