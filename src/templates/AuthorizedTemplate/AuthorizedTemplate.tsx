import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthorizedTemplate = () => {
	return (
		<div>
			AuthorizedTemplate
			<Outlet />
		</div>
	);
};

export default AuthorizedTemplate;
