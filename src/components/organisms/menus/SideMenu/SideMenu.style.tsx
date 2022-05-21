import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 20px;
	left: 15px;
	width: 240px;
	min-height: calc(100vh - 40px);
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

export const StyledNav = styled.nav``;
export const StyledList = styled.ul`
	list-style: none;
`;
export const StyledListItem = styled.li`
	position: relative;
	cursor: pointer;
	padding: 0.5rem 0;
	padding-left: 2rem;
	transition: 0.2s linear;
	&::before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${({ theme }) => theme.colors.primaryFont};
		transform: translateX(-100%);
		transition: 0.3s linear;
		z-index: -1;
	}
	&:hover {
		color: ${({ theme }) => theme.colors.light};
		&::before {
			transform: translateX(0);
		}
	}
`;

export const BottomSideMenu = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;
`;

export const BottomLink = styled(Link)`
	position: relative;
	font-size: 1.6rem;
	padding: 1.7rem 2rem;
	text-decoration: none;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.primaryFont};
	border-top: 1px solid ${({ theme }) => theme.colors.primaryFont};
	transition: 0.2s linear;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${({ theme }) => theme.colors.primaryFont};
		z-index: -1;
		opacity: 0;
		transition: 0.3s linear;
	}
	&:hover {
		color: ${({ theme }) => theme.colors.light};
		&::before {
			opacity: 1;
		}
	}
`;
