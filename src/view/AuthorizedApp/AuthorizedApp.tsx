import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';
import Dashboard from '../Dashboard/Dashboard';

const AuthorizedApp = () => {
	const auth = useAuth();

	const logout = () => {
		auth.signOut();
	};

	return (
		<div>
			<h1>AuthorizedApp</h1>
			<button onClick={logout}>Wyloguj się </button>
			<div>
				<Routes>
					<Route path="/" element={<Dashboard />} />
				</Routes>
			</div>
		</div>
	);
};

export default AuthorizedApp;
