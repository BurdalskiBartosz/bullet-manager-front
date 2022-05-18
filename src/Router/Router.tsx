import { Route, Routes } from 'react-router-dom';
import AuthorizationTemplate from '../templates/AuthorizationTemplate/AuthorizationTemplate';
import AuthorizedTemplate from '../templates/AuthorizedTemplate/AuthorizedTemplate';
import UnauthorizedTemplate from '../templates/UnauthorizedTemplate/UnauthorizedTemplate';
import Login from '../view/auth/Login/Login';
import Registration from '../view/auth/Registration/Registration';
import AuthorizedApp from '../view/AuthorizedApp/AuthorizedApp';
import PrivateRoute from '../view/PrivateRoute';
import UnauthorizedApp from '../view/UnauthorizedApp/UnauthorizedApp';

const Router = () => {
	return (
		<Routes>
			<Route element={<UnauthorizedTemplate />}>
				<Route path="/*" element={<UnauthorizedApp />} />
			</Route>
			<Route element={<AuthorizationTemplate />}>
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
			</Route>
			<Route
				path="/app/*"
				element={
					<PrivateRoute>
						<AuthorizedApp />
					</PrivateRoute>
				}
			/>
		</Routes>
	);
};
export default Router;
