import { Route, Routes } from 'react-router-dom';
import Home from 'view/Home/Home';

const UnauthorizedApp = () => {
	return (
		<div>
			<h1>UnauthorizedApp</h1>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};

export default UnauthorizedApp;
