import { Outlet } from 'react-router-dom';
import { HomeMenu } from 'components';

const WebpageTemplate = () => {
	return (
		<div>
			<HomeMenu />
			<Outlet />
		</div>
	);
};

export default WebpageTemplate;
