import { FC } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { AuthProvider } from './AuthProvider';
import { BrowserRouter } from 'react-router-dom';

type tProps = {
	children: React.ReactNode;
};

const Providers: FC<tProps> = ({ children }) => {
	const store = setupStore();
	return (
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<AuthProvider>{children}</AuthProvider>
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	);
};
export default Providers;
