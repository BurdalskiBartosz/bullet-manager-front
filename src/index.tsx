import { StrictMode } from 'react';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styles/GlobalStyles';
import App from './App';
import './i18n/index';
import Providers from './providers';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('bullet-manager')!;
const root = createRoot(container);

root.render(
	<StrictMode>
		<Providers>
			<App />
		</Providers>
		<GlobalStyles />
	</StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
