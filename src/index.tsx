import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<App />
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
		<GlobalStyles />
	</React.StrictMode>,
	document.getElementById('bullet-manager')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
