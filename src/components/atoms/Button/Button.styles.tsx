import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 100%;
	padding: 1rem 0;
	border: none;
	font-weight: bold;
	font-family: ${({ theme }) => theme.fonts.primary};
	color: ${({ theme }) => theme.colors.light};
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	cursor: pointer;
`;
