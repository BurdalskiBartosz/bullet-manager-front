import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from 'src/hooks/useAuth';

const LoggedUserTemplate = ({ children }) => {
	const auth = useAuth();
	const menuClick = () => {
		console.log('test');
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={menuClick}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						News
					</Typography>
					<Button onClick={() => auth.signOut()} color="inherit">
						Wyloguj się
					</Button>
				</Toolbar>
			</AppBar>
			{children}
		</Box>
	);
};

export default LoggedUserTemplate;
