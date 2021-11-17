import React from 'react';
import { Provider } from 'react-redux';
import store from 'src/store/store';
import { AuthProvider } from './AuthProvider';

const AppProviders = ({ children }) => {
	return (
		<Provider store={store}>
			<AuthProvider>{children}</AuthProvider>
		</Provider>
	);
};

export default AppProviders;
