import { Alert } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from 'src/components/molecules/inputs/Input/Input';
import { useAuth } from 'src/hooks/useAuth';
import AuthTemplate from 'src/templates/AuthTemplate/AuthTemplate';
import Button from 'src/components/atoms/Button';

const LoginPage = () => {
	const router = useRouter();
	const auth = useAuth();
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm();

	useEffect(() => {
		if (!router) return;
		router.prefetch('/dashboard');
	}, []);

	return (
		<AuthTemplate
			title="Zaloguj się"
			content={
				<>
					{auth.error && (
						<Alert sx={{ mb: 2 }} severity="error">
							{auth.error}
						</Alert>
					)}
					<Box component="form" onSubmit={handleSubmit(auth.signIn)}>
						<Input
							name="email"
							label="Email lub login"
							error={{
								isError: errors.email,
								message: 'Musisz podać email lub login'
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
					</Box>
				</>
			}
			actions={
				<>
					<Link href="/auth/register" passHref>
						<Button variant="outline">Zarejestruj się</Button>
					</Link>
				</>
			}
		/>
	);
};

export default LoginPage;
