import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const UnauthorizedTemplate = () => {
	return (
		<div>
			UnauthorizedTemplate
			<nav>
				<li>
					<Link to="login">Login</Link>
				</li>
				<li>
					<Link to="registration">Rejestracja</Link>
				</li>
			</nav>
			<Outlet />
		</div>
	);
};

export default UnauthorizedTemplate;
