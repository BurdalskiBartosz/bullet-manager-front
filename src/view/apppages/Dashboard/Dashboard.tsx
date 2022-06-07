import { useAuth } from 'providers/AuthProvider';
import { Font } from 'components';

const Dashboard = () => {
	const auth = useAuth();

	return (
		<div>
			<Font
				variant="header"
				style={{
					color: 'white',
					fontWeight: 'bold',
					textAlign: 'center'
				}}
			>
				Witaj, {auth.user!.login}
			</Font>
			<h1>Dashboard</h1>
		</div>
	);
};

export default Dashboard;
