import { Font } from 'components';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';
import AuthorizedTemplate from 'templates/AuthorizedTemplate/AuthorizedTemplate';
import Dashboard from 'view/Dashboard/Dashboard';

const AuthorizedApp = () => {
	const auth = useAuth();

	return (
		<AuthorizedTemplate>
			<div>
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</div>
			<Font
				variant="header"
				style={{
					color: 'white',
					fontWeight: 'bold',
					textAlign: 'center'
				}}
			>
				Witaj, {auth.user!.login}
			</Font>
		</AuthorizedTemplate>
	);
};

export default AuthorizedApp;
