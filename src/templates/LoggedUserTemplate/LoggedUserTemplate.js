import { Box } from '@mui/system';
import Sidebar from 'src/components/organisms/Sidebar';
import Header from 'src/components/organisms/Header';

const LoggedUserTemplate = ({ children }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Header />
			<Box sx={{ display: 'flex' }}>
				<Sidebar />
				<Box sx={{ p: '8rem 2rem 2rem' }}>{children}</Box>
			</Box>
		</Box>
	);
};

export default LoggedUserTemplate;
