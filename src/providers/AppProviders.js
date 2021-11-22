import React from 'react';
import store from 'src/store/store';
import { Provider } from 'react-redux';
import { AuthProvider } from './AuthProvider';
import Theme from './ThemeProvider';

const AppProviders = ({ children }) => {
	return (
		<Provider store={store}>
			<Theme>
				<AuthProvider>{children}</AuthProvider>
			</Theme>
		</Provider>
	);
};

export default AppProviders;
