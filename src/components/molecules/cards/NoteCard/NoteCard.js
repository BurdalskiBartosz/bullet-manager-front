import {
	Card,
	CardActions,
	CardContent,
	Typography,
	useTheme
} from '@mui/material';
import Button from 'src/components/atoms/Button';

const NoteCard = ({ note }) => {
	const theme = useTheme();
	const cardStyles = {
		primary: {
			backgroundColor: theme.palette.cards.primary.main,
			color: theme.palette.cards.primary.dark
		},
		secondary: {
			backgroundColor: theme.palette.cards.secondary.main,
			color: theme.palette.cards.secondary.dark
		},
		tetiary: {
			backgroundColor: theme.palette.cards.tetiary.main,
			color: theme.palette.cards.tetiary.dark
		}
	};
	return (
		<Card sx={{ minWidth: 300, maxWidth: 345, ...cardStyles[note.type] }}>
			<CardContent>
				<Typography variant="p" component="p">
					{note.content}
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					disply: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<Button size="small">Edytuj</Button>
			</CardActions>
		</Card>
	);
};

export default NoteCard;
