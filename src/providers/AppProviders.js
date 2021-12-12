import React from 'react';
import { AuthProvider } from './AuthProvider';
import Theme from './ThemeProvider';

const AppProviders = ({ children }) => {
	return (
		<Theme>
			<AuthProvider>{children}</AuthProvider>
		</Theme>
	);
};

export default AppProviders;
