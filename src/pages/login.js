import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import Input from 'src/components/molecules/inputs/Input/Input';
import { useAuth } from 'src/hooks/useAuth';
import AuthTemplate from 'src/templates/AuthTemplate/AuthTemplate';

const LoginPage = () => {
	const auth = useAuth();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm();

	const onSubmit = (data) => {
		console.log('test');
		auth.signIn(data);
	};

	return (
		<AuthTemplate>
			<div>
				{auth.isLoggedUser && <div>ZALGOWANO</div>}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<Controller
							name="email"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<TextField
									label="Email"
									variant="outlined"
									{...field}
								/>
							)}
						/>
						<div>{errors.email && <span>ERROR</span>}</div>
					</div>
					<div>
						<Controller
							name="password"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<TextField
									label="Hasło"
									type="password"
									variant="outlined"
									{...field}
								/>
							)}
						/>
						<div>{errors.password && <span>ERROR</span>}</div>
					</div>
					<Button type="submit" variant="contained">
						Zaloguj się
					</Button>
				</form>
				<Link href="/register">Zarejestruj się</Link>
				<Button onClick={() => auth.signOut()}>TEST LOGOUT</Button>
			</div>
		</AuthTemplate>
	);
};

export default LoginPage;
