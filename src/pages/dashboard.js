import { Typography } from '@mui/material';
import LoggedUserTemplate from 'src/templates/LoggedUserTemplate/LoggedUserTemplate';

const Dashboard = () => {
	return (
		<LoggedUserTemplate>
			<Typography variant="h1">Dashboard</Typography>
		</LoggedUserTemplate>
	);
};

export default Dashboard;
