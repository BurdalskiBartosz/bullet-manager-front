import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './providers/AuthProvider';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import App from './App';
import './i18n/index';
import { Provider } from 'react-redux';
import store from 'store/store';

ReactDOM.render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<AuthProvider>
						<App />
					</AuthProvider>
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
		<GlobalStyles />
	</StrictMode>,
	document.getElementById('bullet-manager')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
