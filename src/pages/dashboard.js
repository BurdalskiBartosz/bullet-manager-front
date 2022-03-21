import { Grid, IconButton, Stack, Typography } from '@mui/material';
import { Box, textAlign } from '@mui/system';
import { useState } from 'react';
import LoggedUserTemplate from 'src/templates/LoggedUserTemplate/LoggedUserTemplate';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';

const Dashboard = () => {
	const [counter, setCounter] = useState(0);
	const [pages, setPages] = useState(0);
	return (
		<LoggedUserTemplate>
			<Stack
				direction="row"
				alignItems="flex-start"
				justifyContent="space-between"
			>
				<Typography variant="h1">Dashboard</Typography>
			</Stack>
			<Grid container spacing={3}>
				<Grid item xs={4}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							padding: 2,
							border: '3px solid white',
							borderRadius: '5px',
							textAlign: 'center',
							minHeight: '200px'
						}}
					>
						<Typography
							variant="p"
							component="p"
							fontSize={18}
							fontWeight="bold"
							marginBottom={2}
						>
							Wypite szklanki wody
						</Typography>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-around'
							}}
						>
							<IconButton onClick={() => setCounter(counter + 1)}>
								<Add />
							</IconButton>
							{counter}
							<IconButton onClick={() => setCounter(counter - 1)}>
								<Remove />
							</IconButton>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={4}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							padding: 2,
							border: '3px solid white',
							borderRadius: '5px',
							textAlign: 'center',
							minHeight: '200px'
						}}
					>
						<Typography
							variant="p"
							component="p"
							fontSize={18}
							fontWeight="bold"
							marginBottom={2}
						>
							Przeczytane strony
						</Typography>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-around',
								fontSize: '26px'
							}}
						>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column'
								}}
							>
								<IconButton
									onClick={() => setPages(pages + 10)}
								>
									<Add /> 10
								</IconButton>
								<IconButton onClick={() => setPages(pages + 1)}>
									<Add /> 1
								</IconButton>
							</Box>
							{pages}
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column'
								}}
							>
								<IconButton
									onClick={() => setPages(pages - 10)}
								>
									<Remove /> 10
								</IconButton>
								<IconButton onClick={() => setPages(pages - 1)}>
									<Remove /> 1
								</IconButton>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</LoggedUserTemplate>
	);
};

export default Dashboard;
