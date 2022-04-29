import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	html {
		font-size: 62.5%;
	}
	body {
		font-size: 1.6rem;
		font-family: 'Open Sans', sans-serif;
	}
`;
