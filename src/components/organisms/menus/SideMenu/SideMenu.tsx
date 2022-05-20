import { FC } from 'react';
import {
	Wrapper,
	StyledLogo,
	NavLogoWrapper,
	StyledList,
	StyledListItem,
	BottomSideMenu
} from './SideMenu.style';
import logo from 'assets/images/bullet-manager-logo.png';
import { Link as MyLink } from 'components';
import { Link } from 'react-router-dom';

type Props = {};

const SideMenu: FC<Props> = () => {
	return (
		<Wrapper>
			<NavLogoWrapper>
				<Link to="/">
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
				<MyLink link="#">Zaproś użytkownika</MyLink>
				<MyLink link="#">Pomoc</MyLink>
			</BottomSideMenu>
		</Wrapper>
	);
};

export default SideMenu;
