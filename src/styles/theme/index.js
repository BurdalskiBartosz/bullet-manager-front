import { responsiveFontSizes, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
	spacing: 10,
	palette: {
		mode: 'dark',
		primary: {
			main: '#D6D5C1',
			danger: '#8F0900'
		},
		secondary: {
			main: '#C1D2D6'
		}
	},
	typography: {
		fontFamily: 'Lato',
		h1: {
			fontSize: '4rem',
			fontWeight: 'bold',
			marginBottom: '4rem',
			color: '#D6D5C1'
		},
		h2: {
			fontSize: '3rem'
		},
		h3: {
			fontSize: '2rem'
		}
	}
});
export const theme = responsiveFontSizes(darkTheme);
