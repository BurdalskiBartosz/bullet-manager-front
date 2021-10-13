import { Provider } from 'react-redux';
import store from '@f/store/store';
import 'antd/dist/antd.css';
import '@f/styles/index.scss';
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
