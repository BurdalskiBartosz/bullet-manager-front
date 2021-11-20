import { Card, CardActions, CardContent } from '@mui/material';
import { Box } from '@mui/system';

const AuthTemplate = ({ content, actions }) => {
	return (
		<Box sx={{ display: 'flex', minHeight: '100vh' }}>
			<Card sx={{ p: 4, m: 'auto', width: 'auto' }}>
				<CardContent>{content}</CardContent>
				<CardActions>{actions}</CardActions>
			</Card>
		</Box>
	);
};

export default AuthTemplate;
