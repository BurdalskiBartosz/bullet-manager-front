import React from 'react';
// import { GlobalStyle } from '@/styles/base/GlobalStyle';
// import { defaultTheme } from '@/styles/theme/defaultTheme';
import { Provider } from 'react-redux';
import store from 'src/store/store';
// import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './AuthProvider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark'
	}
});

const AppProviders = ({ children }) => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={darkTheme}>
				<AuthProvider>{children}</AuthProvider>
			</ThemeProvider>
		</Provider>
	);
};

export default AppProviders;
