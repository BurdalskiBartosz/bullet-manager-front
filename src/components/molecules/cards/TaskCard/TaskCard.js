import {
	Card,
	CardActions,
	CardContent,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Typography
} from '@mui/material';
import Button from 'src/components/atoms/Button';

const TaskCard = ({ task }) => {
	return (
		<Card sx={{ minWidth: 300, maxWidth: 345 }}>
			<CardContent>
				<Typography variant="h4">{task.title}</Typography>
				<Typography variant="p" component="p">
					{task.content}
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					disply: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<Button size="small">Edytuj</Button>
				<FormGroup>
					<FormControlLabel control={<Checkbox />} label="Wykonane" />
				</FormGroup>
			</CardActions>
		</Card>
	);
};

export default TaskCard;
