import AppProviders from 'src/providers/AppProviders';

function MyApp({ Component, pageProps }) {
	return (
		<AppProviders>
			<Component {...pageProps} />
		</AppProviders>
	);
}

export default MyApp;
