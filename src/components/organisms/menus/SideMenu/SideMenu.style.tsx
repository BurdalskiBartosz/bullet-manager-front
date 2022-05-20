import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	padding: 2rem;
	top: 20px;
	left: 15px;
	width: 240px;
	min-height: calc(100vh - 40px);
	background-color: ${({ theme }) => theme.colors.light};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	box-shadow: ${({ theme }) => theme.shadows.primary}; ;
`;

export const StyledLogo = styled.img`
	width: 120px;
	height: 50px;
`;

export const NavLogoWrapper = styled.div`
	margin-bottom: 2rem;
`;

export const StyledNav = styled.nav``;
export const StyledList = styled.ul`
	list-style: none;
`;
export const StyledListItem = styled.li`
	margin-bottom: 1rem;
`;

export const BottomSideMenu = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;
`;
