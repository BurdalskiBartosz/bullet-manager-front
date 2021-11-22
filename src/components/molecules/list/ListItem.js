import {
	ListItem as MuiListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from '@mui/material';
import Link from 'next/link';

const ListItem = ({ href, name, icon }) => {
	return (
		<MuiListItem disablePadding>
			<Link href={href} passHref>
				<ListItemButton component="a">
					<ListItemIcon>{icon}</ListItemIcon>
					<ListItemText primary={name} />
				</ListItemButton>
			</Link>
		</MuiListItem>
	);
};

export default ListItem;
