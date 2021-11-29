import { Box } from '@mui/system';
import Sidebar from 'src/components/organisms/Sidebar';
import Header from 'src/components/organisms/Header';

const LoggedUserTemplate = ({ children }) => {
	return (
		<>
			<Header />
			<Box sx={{ display: 'flex' }}>
				<Sidebar />
				<Box sx={{ width: 'calc(100vw - 280px)', p: '8rem 2rem 2rem' }}>
					{children}
				</Box>
			</Box>
		</>
	);
};

export default LoggedUserTemplate;
