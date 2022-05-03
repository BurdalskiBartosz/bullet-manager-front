import styled from 'styled-components';

export const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.authBackground};
`;

export const StyledInnerWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.light};
	border: 1px solid ${({ theme }) => theme.colors.gray};
	border-radius: 15px;
	padding: 8.5rem 8rem 5.5rem;
	box-shadow: ${({ theme }) => theme.shadows.primary};
`;

export const StyledLogo = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 117px;
	height: 50px;
`;
