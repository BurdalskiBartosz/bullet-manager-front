import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';

type tPrivateRoute = {
	children: JSX.Element;
};

const PrivateRoute: React.FC<tPrivateRoute> = ({ children }) => {
	let auth = useAuth();
	let location = useLocation();

	if (!auth.user) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};
export default PrivateRoute;
