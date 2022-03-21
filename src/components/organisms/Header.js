import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from 'src/hooks/useAuth';
import DatePicker from './date/DatePicker/DatePicker';
import { dateFormat } from 'src/utils/dateFormat';

const Header = () => {
	const auth = useAuth();

	return (
		<AppBar
			sx={{
				py: 1,
				boxShadow: 'none',
				backgroundImage: 'none',
				bgcolor: 'secondary.main'
			}}
			position="fixed"
		>
			<Toolbar>
				<DatePicker />
				<Box sx={{ ml: 2 }}>
					Dzisiejsza data : {dateFormat(new Date())}
				</Box>
				<Box sx={{ ml: 'auto' }}>
					<Button onClick={() => auth.signOut()} color="inherit">
						Wyloguj się
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
