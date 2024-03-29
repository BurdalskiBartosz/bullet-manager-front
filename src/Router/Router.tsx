import { Route, Routes } from 'react-router-dom';
import { appRootRoute } from 'utils/constants';
import AuthorizationTemplate from 'templates/AuthorizationTemplate/AuthorizationTemplate';
import WebpageTemplate from 'templates/WebpageTemplate/WebpageTemplate';
import Login from 'view/auth/Login/Login';
import Registration from 'view/auth/Registration/Registration';
import Home from 'view/webpages/Home/Home';
import PrivateRoute from 'view/PrivateRoute';
import AppTemplate from 'templates/AppTemplate/AppTemplate';
import Dashboard from 'view/apppages/Dashboard/Dashboard';
import UserTasks from 'view/Tasks/UserTasks';

const Router = () => {
	return (
		<Routes>
			<Route element={<WebpageTemplate />}>
				<Route path="/" element={<Home />} />
			</Route>
			<Route element={<AuthorizationTemplate />}>
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
			</Route>
			<Route
				path={`/${appRootRoute}/*`}
				element={
					<PrivateRoute>
						<AppTemplate />
					</PrivateRoute>
				}
			>
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="tasks" element={<UserTasks />} />
				<Route
					path="category/:name"
					element={<div>NAZWA KATEGORII</div>}
				/>
			</Route>
		</Routes>
	);
};
export default Router;
