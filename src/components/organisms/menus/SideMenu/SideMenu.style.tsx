import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 240px;
	height: calc(100vh - 40px);
	background-color: ${({ theme }) => theme.colors.light};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	box-shadow: ${({ theme }) => theme.shadows.primary};
	overflow: hidden;
`;

export const StyledLogo = styled.img`
	width: 120px;
	height: 50px;
`;

export const NavLogoWrapper = styled.div`
	padding: 2rem;
`;

export const StyledList = styled.ul`
	list-style: none;
`;

export const BottomSideMenu = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;
`;

export const BottomLink = styled(Link)`
	padding: 1.7rem 2rem;
	text-decoration: none;
	font-weight: bold;
	border-top: 1px solid ${({ theme }) => theme.colors.dark};

	${({ theme: { animations, colors } }) =>
		animations.menuTransition(colors.dark, colors.light)}
`;
