import { List } from '@mui/material';
import { Box } from '@mui/system';
import BookIcon from '@mui/icons-material/Book';
import NotesIcon from '@mui/icons-material/Notes';
import TaskIcon from '@mui/icons-material/Task';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ListItem from '../molecules/list/ListItem';

const Sidebar = () => {
	return (
		<Box
			sx={{
				height: 'calc(100vh - 84px)',
				width: 280
			}}
		>
			<Box
				sx={{
					position: 'fixed',
					top: '84px',
					left: 0,
					width: '100%',
					maxWidth: 280,
					bgcolor: 'secondary.main',
					height: '100%'
				}}
			>
				<nav aria-label="main mailbox folders">
					<List>
						<ListItem
							href="/tasks"
							name="Zadania"
							icon={<TaskIcon />}
						/>
						<ListItem
							href="/auth/register"
							name="Notatki"
							icon={<NotesIcon />}
						/>
						<ListItem
							href="/auth/register"
							name="Książki"
							icon={<BookIcon />}
						/>
						<ListItem
							href="/auth/register"
							name="Planery"
							icon={<ScheduleIcon />}
						/>
						<ListItem
							href="/auth/register"
							name="Kalendarz"
							icon={<CalendarTodayIcon />}
						/>
					</List>
				</nav>
			</Box>
		</Box>
	);
};

export default Sidebar;
