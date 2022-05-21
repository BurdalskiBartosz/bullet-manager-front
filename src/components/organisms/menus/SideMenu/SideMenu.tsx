import { FC } from 'react';
import {
	Wrapper,
	StyledLogo,
	NavLogoWrapper,
	StyledList,
	StyledListItem,
	BottomSideMenu,
	BottomLink
} from './SideMenu.style';
import logo from 'assets/images/bullet-manager-logo.png';
import { Link } from 'react-router-dom';
import Font from 'components/atoms/Font';

type Props = {};

const SideMenu: FC<Props> = () => {
	return (
		<Wrapper>
			<NavLogoWrapper>
				<Link to="/app/dashboard">
					<StyledLogo src={logo} alt="" title="" />
				</Link>
			</NavLogoWrapper>
			<nav>
				<StyledList>
					<StyledListItem>Dashboard</StyledListItem>
					<StyledListItem>Zadania</StyledListItem>
					<StyledListItem>Notatki</StyledListItem>
					<StyledListItem>Listy</StyledListItem>
					<StyledListItem>Harmonogramy</StyledListItem>
					<StyledListItem>Cele</StyledListItem>
					<StyledListItem>Kalendarz</StyledListItem>
					<StyledListItem>Projekty</StyledListItem>
				</StyledList>
			</nav>
			<BottomSideMenu>
				<BottomLink to="/app/dashboard">
					<Font component="span">Zaproś użytkownika</Font>
				</BottomLink>
				<BottomLink to="/app/dashboard">
					<Font component="span">Pomoc</Font>
				</BottomLink>
			</BottomSideMenu>
		</Wrapper>
	);
};

export default SideMenu;
