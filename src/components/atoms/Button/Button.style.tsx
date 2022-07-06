import styled from 'styled-components';

export type tButtonColors = 'primary' | 'secondary' | 'dark';

type tButton = {
	fullWidth?: boolean;
	colorType?: tButtonColors;
};

export const StyledButton = styled.button<tButton>`
	width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
	padding: 1rem 1.8rem;
	border: none;
	font-weight: 500;
	font-family: ${({ theme }) => theme.fonts.primary};
	color: ${({ theme }) => theme.colors.light};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	cursor: pointer;
	transition: 0.3s linear;
	background-color: ${({ theme, colorType }) => {
		if (colorType === 'primary') {
			return theme.colors.purple100;
		} else if (colorType === 'secondary') {
			return theme.colors.purple200;
		} else {
			return theme.colors.purple500;
		}
	}};
`;
