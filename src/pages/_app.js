import ProtectedRoutes from 'src/helper/ProtectedRoutes/ProtectedRoutes';
import AppProviders from 'src/providers/AppProviders';
import { wrapper } from 'src/store/store';
import { useSelector } from 'react-redux';
import { selectDate } from 'src/store/date/dateSlice';

const MyApp = ({ Component, pageProps, router }) => {
	const selectedDate = useSelector(selectDate);

	return (
		<AppProviders>
			<ProtectedRoutes router={router}>
				<Component {...pageProps} selectedDate={selectedDate} />
			</ProtectedRoutes>
		</AppProviders>
	);
};

export default wrapper.withRedux(MyApp);
