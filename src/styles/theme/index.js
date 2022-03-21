import { responsiveFontSizes, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
	spacing: 10,
	palette: {
		mode: 'dark',
		primary: {
			main: '#D6D5C1',
			dark: '#121212',
			danger: '#8F0900'
		},
		secondary: {
			main: '#3A3A3A',
			danger: '#8F0900'
		},
		cards: {
			primary: {
				main: '#ffffff',
				dark: '#121212',
				danger: '#8F0900'
			},
			secondary: {
				main: '#3A3A3A',
				danger: '#8F0900'
			},
			tetiary: {
				main: '#919074',
				dark: '#ffffff'
			}
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
			fontSize: '3rem',
			marginBottom: '3rem'
		},
		h3: {
			fontSize: '2rem',
			marginBottom: '2.5rem'
		},
		p: {
			fontSize: '.8rem'
		}
	}
});
export const theme = responsiveFontSizes(darkTheme);
