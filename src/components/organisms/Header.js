import { AppBar, Button, IconButton, TextField, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from 'src/hooks/useAuth';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { useState } from 'react';

const Header = () => {
	const auth = useAuth();

	const [value, setValue] = useState(new Date());

	const handleChange = (newValue) => {
		setValue(newValue);
	};
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
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton>

				<LocalizationProvider dateAdapter={DateAdapter}>
					<DesktopDatePicker
						label="Wybrana data"
						inputFormat="MM/dd/yyyy"
						value={value}
						onChange={handleChange}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
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
