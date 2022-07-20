import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAuth } from 'providers/AuthProvider';
import { tLoginUserData } from 'types/forms/authForm';
import { Button, Font, Input, Link, PasswordInput } from 'components';
import { StyledErrorBar, StyledTextUnderForm } from 'styles/shared/auth';
import { StyledForm } from 'styles/shared/global';

const validationSchema = yup.object().shape({
	loginOrEmail: yup.string().required(),
	password: yup.string().required().min(6)
});

const Login = () => {
	const auth = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<tLoginUserData>({
		resolver: yupResolver(validationSchema)
	});

	return (
		<div>
			<Font variant="header" style={{ marginBottom: '4rem' }}>
				Login
			</Font>
			{auth.error && (
				<StyledErrorBar>
					<Font>{auth.error}</Font>
				</StyledErrorBar>
			)}
			<StyledForm onSubmit={handleSubmit(auth.signIn)}>
				<Input
					id="loginOrEmail"
					label="Login or email input"
					register={register}
					fullWidth={false}
					error={{
						isError: !!errors.loginOrEmail,
						errorMessage: 'Login or email validation message'
					}}
				/>
				<PasswordInput
					inputBase={{
						id: 'password',
						label: 'Password input',
						register: register,
						fullWidth: false,
						type: 'password',
						error: {
							isError: !!errors.password,
							errorMessage: 'Password validation message'
						}
					}}
				/>
				<Button>Login</Button>
			</StyledForm>
			<StyledTextUnderForm>
				<Font>Posiadasz konto ?</Font>
				<Link link="/registration">Register</Link>
			</StyledTextUnderForm>
		</div>
	);
};

export default Login;
