import { List } from '@mui/material';
import { Box } from '@mui/system';
import BookIcon from '@mui/icons-material/Book';
import NotesIcon from '@mui/icons-material/Notes';
import TaskIcon from '@mui/icons-material/Task';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Dashboard from '@mui/icons-material/Dashboard';
import ListItem from '../molecules/list/ListItem';

const Sidebar = () => {
	return (
		<Box
			sx={{
				height: 'calc(100vh - 84px)',
				width: 200
			}}
		>
			<Box
				sx={{
					position: 'fixed',
					top: '84px',
					left: 0,
					width: '100%',
					maxWidth: 200,
					bgcolor: 'secondary.main',
					height: '100%'
				}}
			>
				<nav aria-label="main mailbox folders">
					<List>
						<ListItem
							href="/dashboard"
							name="Dashboard"
							icon={<Dashboard />}
						/>
						<ListItem
							href="/tasks"
							name="Zadania"
							icon={<TaskIcon />}
						/>
						<ListItem
							href="/notes"
							name="Notatki"
							icon={<NotesIcon />}
						/>
						<ListItem
							href="/books"
							name="Książki"
							icon={<BookIcon />}
						/>
						<ListItem
							href="/schedules"
							name="Harmonogramy"
							icon={<ScheduleIcon />}
						/>
					</List>
				</nav>
			</Box>
		</Box>
	);
};

export default Sidebar;
