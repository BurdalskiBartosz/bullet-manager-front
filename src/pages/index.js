import Link from 'next/link';
import AuthTemplate from 'src/templates/AuthTemplate/AuthTemplate';
import Button from 'src/components/atoms/Button';
import { Grid, Typography } from '@mui/material';

const Home = () => {
	return (
		<AuthTemplate
			title="Witaj, użytkowniku."
			content={
				<Grid container spacing={5}>
					<Grid item>
						<Typography sx={{ mb: 2 }}>
							Posiadasz konto ?
						</Typography>
						<Link href="/auth/login" passHref>
							<Button type="submit" variant="contained">
								Zaloguj się
							</Button>
						</Link>
					</Grid>
					<Grid item>
						<Typography sx={{ mb: 2 }}>Nie masz konta ?</Typography>

						<Link href="/auth/register" passHref>
							<Button type="submit" variant="contained">
								Zarejestruj
							</Button>
						</Link>
					</Grid>
				</Grid>
			}
		/>
	);
};

export default Home;
