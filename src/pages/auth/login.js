import { Alert, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Input from 'src/components/molecules/inputs/Input/Input';
import { useAuth } from 'src/hooks/useAuth';
import AuthTemplate from 'src/templates/AuthTemplate/AuthTemplate';

const LoginPage = () => {
	const auth = useAuth();
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm();

	const onSubmit = (data) => {
		auth.signIn(data);
	};

	return (
		<AuthTemplate
			content={
				<>
					<Typography variant="h1">Zaloguj się</Typography>
					{auth.error && (
						<Alert sx={{ mb: 2 }} severity="error">
							{auth.error}
						</Alert>
					)}
					{auth.isLoggedUser && <div>ZALGOWANO</div>}
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							name="email"
							label="Email"
							error={{
								isError: errors.email,
								message: 'Podaj poprawny email'
							}}
							control={control}
						/>
						<Input
							name="password"
							label="Hasło"
							type="password"
							error={{
								isError: errors.password,
								message: 'Hasło jest wymagane'
							}}
							control={control}
						/>
						<Button type="submit" variant="contained">
							Zaloguj się
						</Button>
					</form>
				</>
			}
			actions={
				<>
					<Link href="/auth/register" passHref>
						<Button variant="outline">Zarejestruj się</Button>
					</Link>
					<Button onClick={() => auth.signOut()}>TEST LOGOUT</Button>
				</>
			}
		/>
	);
};

export default LoginPage;
