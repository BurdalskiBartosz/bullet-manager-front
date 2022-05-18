import { Route, Routes } from 'react-router-dom';
import { Font } from '../../components';
import { useAuth } from '../../providers/AuthProvider';
import AuthorizedTemplate from '../../templates/AuthorizedTemplate/AuthorizedTemplate';
import Dashboard from '../Dashboard/Dashboard';

const AuthorizedApp = () => {
	const auth = useAuth();

	const logout = () => {
		auth.signOut();
	};

	return (
		<AuthorizedTemplate>
			<button onClick={logout}>Wyloguj się </button>
			<div>
				<Routes>
					<Route path="/" element={<Dashboard />} />
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
