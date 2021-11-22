import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

const AuthTemplate = ({ title, content, actions }) => {
	return (
		<Box sx={{ display: 'flex', minHeight: '100vh' }}>
			<Card sx={{ p: 4, m: 'auto', width: 'auto' }}>
				<CardContent>
					<Typography variant="h1">{title}</Typography>
					{content}
				</CardContent>
				{actions && <CardActions>{actions}</CardActions>}
			</Card>
		</Box>
	);
};

export default AuthTemplate;
