import ProtectedRoutes from 'src/helper/ProtectedRoutes/ProtectedRoutes';
import AppProviders from 'src/providers/AppProviders';

const MyApp = ({ Component, pageProps, router }) => {
	return (
		<AppProviders>
			<ProtectedRoutes router={router}>
				<Component {...pageProps} />
			</ProtectedRoutes>
		</AppProviders>
	);
};

export default MyApp;
