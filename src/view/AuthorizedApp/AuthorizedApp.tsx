import { Route, Routes } from 'react-router-dom';
import AuthorizedTemplate from 'templates/AuthorizedTemplate/AuthorizedTemplate';
import Dashboard from 'view/Dashboard/Dashboard';

const AuthorizedApp = () => {
	return (
		<AuthorizedTemplate>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</AuthorizedTemplate>
	);
};

export default AuthorizedApp;
