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

const SideMenu: FC<Props> = () => {
	return (
		<Wrapper>
			<NavLogoWrapper>
				<Link to="/app">
					<StyledLogo src={logo} alt="" title="" />
				</Link>
			</NavLogoWrapper>
			<nav>
				<StyledList>
					<StyledListItem>
						<MenuLink to="/app/dashboard">Dashboard</MenuLink>
					</StyledListItem>
					<StyledListItem>
						<MenuLink to="/app/tasks">Zadania</MenuLink>
					</StyledListItem>
					<StyledListItem>
						<MenuLink to="/app/notes">Notatki</MenuLink>
					</StyledListItem>
					<StyledListItem>
						<MenuLink to="/app/lists">Listy</MenuLink>
					</StyledListItem>
					<StyledListItem>
						<MenuLink to="/app/schedules">Harmonogramy</MenuLink>
					</StyledListItem>
					<StyledListItem>
						<MenuLink to="/app/goals">Cele</MenuLink>
					</StyledListItem>
					<StyledListItem>
						<MenuLink to="/app/calendar">Kalendarz</MenuLink>
					</StyledListItem>
					<StyledListItem>
						<MenuLink to="/app/projects">Projekty</MenuLink>
					</StyledListItem>
				</StyledList>
			</nav>
			<BottomSideMenu>
				<BottomLink to="/app">
					<Font component="span">Zaproś użytkownika</Font>
				</BottomLink>
				<BottomLink to="/app">
					<Font component="span">Pomoc</Font>
				</BottomLink>
			</BottomSideMenu>
		</Wrapper>
	);
};

export default SideMenu;
