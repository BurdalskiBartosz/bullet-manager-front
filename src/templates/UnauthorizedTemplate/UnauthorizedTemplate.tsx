import React from 'react';
import { Outlet } from 'react-router-dom';
import { HomeMenu } from '../../components';

const UnauthorizedTemplate = () => {
	return (
		<div>
			<HomeMenu />
			<Outlet />
		</div>
	);
};

export default UnauthorizedTemplate;
