import { useState, useEffect } from 'react';
import { useAuth } from 'src/hooks/useAuth';

const ProtectedRoutes = ({ children, router }) => {
	const [isBrowser, setIsBrowser] = useState(false);
	const auth = useAuth();

	useEffect(() => setIsBrowser(true));

	const unprotectedRoutes = ['/', '/auth/login', '/auth/register'];
	let isPathProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

	if (isBrowser && auth.isLoggedUser && !isPathProtected)
		router.push('/dashboard');
	else if (isBrowser && !auth.isLoggedUser && isPathProtected)
		router.push('/auth/login');

	return children;
};

export default ProtectedRoutes;
