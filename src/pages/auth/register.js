import { Alert, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Button from 'src/components/atoms/Button';
import Input from 'src/components/molecules/inputs/Input/Input';
import { useAuth } from 'src/hooks/useAuth';
import AuthTemplate from 'src/templates/AuthTemplate/AuthTemplate';
import { resolver } from 'src/utils/registerValidation';

const RegisterPage = () => {
	const auth = useAuth();
	const formOptions = { resolver };

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm(formOptions);

	return (
		<AuthTemplate
			title="Zarejestruj się"
			content={
				<>
					{auth.error && (
						<Alert sx={{ mb: 2 }} severity="error">
							{auth.error}
						</Alert>
					)}
					<Box component="form" onSubmit={handleSubmit(auth.signUp)}>
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
							name="login"
							label="Login"
							error={{
								isError: errors.login,
								message: 'Wpisz login'
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
						<Input
							name="confirmPassword"
							label="Powtórz hasło"
							type="password"
							error={{
								isError: errors.confirmPassword,
								message: 'Hasło musi się zgadzać'
							}}
							control={control}
						/>
						<Button type="submit" variant="contained">
							Zarejestruj się
						</Button>
					</Box>
				</>
			}
			actions={
				<>
					<Typography>Masz już konto ? </Typography>
					<Link href="/auth/login" passHref>
						<Button variant="outline">Zaloguj się</Button>
					</Link>
				</>
			}
		/>
	);
};

export default RegisterPage;
