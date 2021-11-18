import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html {
		font-size: 62.5%;
		overflow-x: hidden;
	}
	body {
		font-family: ${({ theme }) => theme.fonts.primary};
		font-size: 1.6rem;
		overflow: hidden;
		${({ theme }) => theme.media.xl} {
			overflow: initial;
		}
	}
	.grecaptcha-badge {
		visibility: hidden;
	}
`;
