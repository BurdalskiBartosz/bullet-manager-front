import { Font } from 'components';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';
import AuthorizedTemplate from 'templates/AuthorizedTemplate/AuthorizedTemplate';
import Dashboard from 'view/Dashboard/Dashboard';
import Tasks from 'view/Tasks/Tasks';

const AuthorizedApp = () => {
	const auth = useAuth();

	return (
		<AuthorizedTemplate>
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
			<div>
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/tasks" element={<Tasks />} />
				</Routes>
			</div>
		</AuthorizedTemplate>
	);
};

export default AuthorizedApp;
