import { HomeMenu } from 'components';
import { Outlet } from 'react-router-dom';

const UnauthorizedTemplate = () => {
	return (
		<div>
			<HomeMenu />
			<Outlet />
		</div>
	);
};

export default UnauthorizedTemplate;
