import { HomeMenu } from 'components';
import { Outlet } from 'react-router-dom';

const WebpageTemplate = () => {
	return (
		<div>
			<HomeMenu />
			<Outlet />
		</div>
	);
};

export default WebpageTemplate;
