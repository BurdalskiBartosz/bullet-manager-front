import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
	${css`
		${normalize}
	`}
	html {
		font-size: 62.5%;
	}
	body {
		font-size: 1.6rem;
	}
`;
